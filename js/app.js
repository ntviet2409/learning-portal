// ===== DAILY TRACKING =====
function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getDailyData() {
  const data = JSON.parse(localStorage.getItem('dailyLearning') || '{}');
  return data;
}

function saveDailyData(data) {
  localStorage.setItem('dailyLearning', JSON.stringify(data));
}

function getDailyTarget() {
  return parseInt(localStorage.getItem('dailyTarget') || '10');
}

function updateDailyTarget(val) {
  val = Math.max(5, Math.min(50, parseInt(val) || 10));
  localStorage.setItem('dailyTarget', val);
  document.getElementById('dailyTarget').value = val;
  renderDashboard();
}

function getTodaysLearnedCount() {
  const data = getDailyData();
  const today = getTodayKey();
  return (data[today] || []).length;
}

function recordWordLearned(word) {
  const data = getDailyData();
  const today = getTodayKey();
  if (!data[today]) data[today] = [];
  if (!data[today].includes(word)) {
    data[today].push(word);
    saveDailyData(data);
  }
  renderDashboard();
}

function recordWordUnlearned(word) {
  const data = getDailyData();
  const today = getTodayKey();
  if (data[today]) {
    data[today] = data[today].filter(w => w !== word);
    saveDailyData(data);
  }
  renderDashboard();
}

function getStreak() {
  const data = getDailyData();
  const target = getDailyTarget();
  let streak = 0;
  const today = new Date();
  // Check if today's target is met — if so, include today
  const todayKey = getTodayKey();
  const todayMet = (data[todayKey] || []).length >= target;

  // Start from yesterday (or today if met)
  let checkDate = new Date(today);
  if (!todayMet) {
    checkDate.setDate(checkDate.getDate() - 1);
  }

  for (let i = 0; i < 365; i++) {
    const key = checkDate.toISOString().slice(0, 10);
    if ((data[key] || []).length >= target) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

function getTotalLearnedAllTime() {
  const data = getDailyData();
  const allWords = new Set();
  Object.values(data).forEach(dayWords => dayWords.forEach(w => allWords.add(w)));
  return allWords.size;
}

function renderDashboard() {
  const today = getTodayKey();
  const target = getDailyTarget();
  const todayCount = getTodaysLearnedCount();
  const streak = getStreak();
  const totalAllTime = Object.keys(learnedWords).length;
  const pct = Math.min(100, Math.round(todayCount / target * 100));

  // Date display
  const d = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('dashDate').textContent = d.toLocaleDateString('en-US', options);

  // Grid cards
  document.getElementById('dashGrid').innerHTML = `
    <div class="dash-card">
      <div class="dash-card-value">${todayCount}<span style="font-size:1rem;color:var(--text-secondary)">/${target}</span></div>
      <div class="dash-card-label">Words Today</div>
      <div class="dash-card-sub">${pct >= 100 ? 'Target reached!' : (target - todayCount) + ' more to go'}</div>
    </div>
    <div class="dash-card">
      <div class="dash-card-value"><span class="streak-fire">${streak > 0 ? '&#128293;' : ''}</span> ${streak}</div>
      <div class="dash-card-label">Day Streak</div>
      <div class="dash-card-sub">${streak > 0 ? 'Keep it up!' : 'Start your streak today!'}</div>
    </div>
    <div class="dash-card">
      <div class="dash-card-value">${totalAllTime}</div>
      <div class="dash-card-label">Total Mastered</div>
      <div class="dash-card-sub">${Math.round(totalAllTime / 10)}% of 1000 words</div>
    </div>
    <div class="dash-card">
      <div class="dash-card-value">${Math.ceil((1000 - totalAllTime) / target)}</div>
      <div class="dash-card-label">Days to Finish</div>
      <div class="dash-card-sub">At ${target} words/day pace</div>
    </div>`;

  // Progress bar
  document.getElementById('dailyProgressLabel').textContent = `${todayCount} / ${target} words today`;
  document.getElementById('dailyProgressPct').textContent = `${pct}%`;
  const fill = document.getElementById('dailyProgressFill');
  fill.style.width = pct + '%';
  fill.className = 'daily-progress-fill ' + (pct >= 100 ? 'complete' : 'incomplete');

  // Target input
  document.getElementById('dailyTarget').value = target;

  // Heatmap
  renderHeatmap();
}

function renderHeatmap() {
  const data = getDailyData();
  const target = getDailyTarget();
  let html = '';
  const today = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const count = (data[key] || []).length;
    const ratio = target > 0 ? count / target : 0;
    let heat = 0;
    if (count > 0) heat = 1;
    if (ratio >= 0.5) heat = 2;
    if (ratio >= 1) heat = 3;
    if (ratio >= 1.5) heat = 4;
    const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ': ' + count + ' words';
    html += `<div class="heatmap-day heat-${heat}" title="${label}"></div>`;
  }
  document.getElementById('heatmap').innerHTML = html;
}

function showTodaysWords() {
  const target = getDailyTarget();
  const data = getDailyData();
  const today = getTodayKey();
  const todayLearned = data[today] || [];

  // Get unlearned words from current topic selection
  const allWords = getAllWords();
  const unlearnedWords = allWords.filter(w => !learnedWords[w.w]);

  // Pick target number of words: mix of new + review
  const newCount = Math.ceil(target * 0.6);
  const reviewCount = target - newCount;

  const newWords = unlearnedWords.slice(0, newCount);
  const learnedArr = allWords.filter(w => learnedWords[w.w]);
  const reviewWords = learnedArr.sort(() => Math.random() - 0.5).slice(0, reviewCount);

  const todaysWordList = [...newWords, ...reviewWords];

  // Show in modal
  let html = `<button class="modal-close" onclick="closeModal()">&times;</button>
    <h3 style="margin-bottom:4px;">Today's Words</h3>
    <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:16px;">
      ${newWords.length} new + ${reviewWords.length} review = ${todaysWordList.length} words
    </p>
    <div style="max-height:400px;overflow-y:auto;text-align:left;">`;

  if (newWords.length > 0) {
    html += `<div style="font-size:0.8rem;font-weight:700;color:var(--primary);margin-bottom:8px;text-transform:uppercase;">New Words</div>`;
    newWords.forEach(w => {
      const done = learnedWords[w.w];
      html += `<div style="padding:8px 0;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">
        <div>
          <strong>${w.w}</strong> <button class="speak-btn" style="width:24px;height:24px;font-size:0.9rem;" onclick="speak('${w.w.replace(/'/g, "\\'")}')">\&#128264;</button>
          <span style="font-size:0.8rem;color:var(--primary);font-family:var(--font-mono);">${w.ipa}</span>
          <div style="font-size:0.82rem;color:var(--text-secondary);">${w.def}</div>${w.vn?`<div style="font-size:0.78rem;color:#c2410c;font-style:italic;">🇻🇳 ${w.vn}</div>`:''}
        </div>
        <button class="btn btn-sm ${done?'btn-success':''}" onclick="toggleLearned('${w.w.replace(/'/g,"\\'")}');showTodaysWords();" style="white-space:nowrap;">${done?'Learned':'Learn'}</button>
      </div>`;
    });
  }

  if (reviewWords.length > 0) {
    html += `<div style="font-size:0.8rem;font-weight:700;color:var(--success);margin:12px 0 8px;text-transform:uppercase;">Review Words</div>`;
    reviewWords.forEach(w => {
      html += `<div style="padding:8px 0;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">
        <div>
          <strong>${w.w}</strong> <button class="speak-btn" style="width:24px;height:24px;font-size:0.9rem;" onclick="speak('${w.w.replace(/'/g, "\\'")}')">\&#128264;</button>
          <span style="font-size:0.8rem;color:var(--primary);font-family:var(--font-mono);">${w.ipa}</span>
          <div style="font-size:0.82rem;color:var(--text-secondary);">${w.def}</div>${w.vn?`<div style="font-size:0.78rem;color:#c2410c;font-style:italic;">🇻🇳 ${w.vn}</div>`:''}
        </div>
        <span style="font-size:0.75rem;color:var(--success);">&#10003; review</span>
      </div>`;
    });
  }

  html += `</div>`;
  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('show');
}

function resetDailyProgress() {
  if (!confirm('Reset today\'s learning progress?')) return;
  const data = getDailyData();
  const today = getTodayKey();
  delete data[today];
  saveDailyData(data);
  renderDashboard();
}

function dismissGettingStarted() {
  localStorage.setItem('gettingStartedDismissed', 'true');
  document.getElementById('gettingStarted').style.display = 'none';
}

// ===== APP STATE =====
let currentTopic = 'all';
let learnedWords = JSON.parse(localStorage.getItem('learnedWords')||'{}');
let flashcardIdx = 0;
let flashcardWords = [];
let quizIdx = 0;
let quizWords = [];
let quizScore = 0;
let quizAnswered = false;

// ===== RENDER FUNCTIONS =====
function getAllWords(){
  let all=[];
  vocabTopics.forEach(t=>t.words.forEach(w=>all.push({...w,topic:t.id,topicName:t.name})));
  return all;
}

function renderVocabStats(){
  const all=getAllWords();
  const learned=all.filter(w=>learnedWords[w.w]);
  const pct=all.length?Math.round(learned.length/all.length*100):0;
  document.getElementById('vocabStats').innerHTML=`
    <div class="stat-item">Total: <span class="stat-num">${all.length}</span></div>
    <div class="stat-item">Learned: <span class="stat-num">${learned.length}</span></div>
    <div class="stat-item">Progress: <span class="stat-num">${pct}%</span></div>
    <div style="flex:1;min-width:120px;">
      <div class="progress-bar-container"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
    </div>`;
}

function renderTopicChips(){
  let html=`<div class="chip ${currentTopic==='all'?'active':''}" onclick="selectTopic('all')">All<span class="chip-count">${getAllWords().length}</span></div>`;
  vocabTopics.forEach(t=>{
    const learned=t.words.filter(w=>learnedWords[w.w]).length;
    html+=`<div class="chip ${currentTopic===t.id?'active':''}" onclick="selectTopic('${t.id}')">${t.name}<span class="chip-count">${learned}/${t.words.length}</span></div>`;
  });
  document.getElementById('topicChips').innerHTML=html;
}

function renderVocab(){
  const search=document.getElementById('vocabSearch').value.toLowerCase();
  let html='';
  const topics=currentTopic==='all'?vocabTopics:vocabTopics.filter(t=>t.id===currentTopic);
  topics.forEach(t=>{
    const filtered=search?t.words.filter(w=>w.w.toLowerCase().includes(search)||w.def.toLowerCase().includes(search)):t.words;
    if(!filtered.length)return;
    const topicLearned=t.words.filter(w=>learnedWords[w.w]).length;
    const pct=Math.round(topicLearned/t.words.length*100);
    html+=`<div style="margin-bottom:24px;">
      <h3 style="font-size:1.1rem;font-weight:600;margin-bottom:4px;color:var(--primary-dark)">${t.name}</h3>
      <div class="topic-progress-label"><span>${topicLearned}/${t.words.length} learned</span><span>${pct}%</span></div>
      <div class="progress-bar-container" style="margin-bottom:12px;"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
      <div class="vocab-grid">`;
    filtered.forEach(w=>{
      const isLearned=learnedWords[w.w];
      html+=`<div class="word-card ${isLearned?'learned':''}">
        <div class="word-head"><span class="word-term">${w.w} <button class="speak-btn" onclick="event.stopPropagation();speak('${w.w.replace(/'/g, "\\'")}')">\u0026#128264;</button></span><span class="word-ipa">${w.ipa}</span></div>
        <div class="word-pos">${w.pos}</div>
        <div class="word-def">${w.def}</div>${w.vn?`<div class="word-vn">🇻🇳 ${w.vn}</div>`:''}
        <div class="word-ex">"${w.ex}"</div>
        <div class="word-actions">
          <button class="btn btn-sm learn-btn ${isLearned?'btn-success':''}" onclick="toggleLearned('${w.w.replace(/'/g,"\\'")}')">${isLearned?'Learned':'Mark Learned'}</button>
        </div>
      </div>`;
    });
    html+=`</div></div>`;
  });
  if(!html) html='<p style="color:var(--text-secondary);padding:20px;">No words found matching your search.</p>';
  document.getElementById('vocabContent').innerHTML=html;
}

function renderGrammar(){
  document.getElementById('grammarContent').innerHTML=grammarData.map((g,i)=>
    `<div class="grammar-block">
      <div class="grammar-header ${i===0?'open':''}" onclick="toggleGrammar(${i})" id="gh${i}"><span>${g.title}</span><span class="arrow">&#9660;</span></div>
      <div class="grammar-body ${i===0?'open':''}" id="gb${i}"><div class="grammar-content">${g.content}</div></div>
    </div>`
  ).join('');
}

// ===== INTERACTIONS =====
function selectTopic(id){ currentTopic=id; renderTopicChips(); renderVocab(); }
function filterVocab(){ renderVocab(); }
function toggleLearned(word){
  if(learnedWords[word]) {
    delete learnedWords[word];
    recordWordUnlearned(word);
  } else {
    learnedWords[word]=true;
    recordWordLearned(word);
  }
  localStorage.setItem('learnedWords',JSON.stringify(learnedWords));
  renderVocab(); renderVocabStats(); renderTopicChips();
}
function toggleGrammar(i){
  const h=document.getElementById('gh'+i), b=document.getElementById('gb'+i);
  h.classList.toggle('open'); b.classList.toggle('open');
}
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Theme
function toggleTheme(){
  document.body.classList.toggle('dark');
  const isDark=document.body.classList.contains('dark');
  document.getElementById('themeToggle').textContent=isDark?'Light':'Dark';
  localStorage.setItem('theme',isDark?'dark':'light');
}
if(localStorage.getItem('theme')==='dark'){document.body.classList.add('dark');document.getElementById('themeToggle').textContent='Light';}

function toggleMobileMenu(){document.getElementById('mobileNav').classList.toggle('show');}

// Flashcard
function openFlashcards(){
  const topics=currentTopic==='all'?vocabTopics:vocabTopics.filter(t=>t.id===currentTopic);
  flashcardWords=[]; topics.forEach(t=>flashcardWords.push(...t.words));
  flashcardWords.sort(()=>Math.random()-0.5);
  flashcardIdx=0;
  showFlashcard();
  document.getElementById('modalOverlay').classList.add('show');
}
function showFlashcard(){
  if(!flashcardWords.length) return;
  const w=flashcardWords[flashcardIdx];
  document.getElementById('modalContent').innerHTML=`
    <button class="modal-close" onclick="closeModal()">&times;</button>
    <h3 style="margin-bottom:8px;">Flashcard Mode</h3>
    <div class="flashcard-counter">${flashcardIdx+1} / ${flashcardWords.length}</div>
    <div class="flashcard">
      <div class="flashcard-word">${w.w} <button class="speak-btn" onclick="speak('${w.w.replace(/'/g, "\\'")}')">\u0026#128264;</button></div>
      <div class="flashcard-ipa">${w.ipa}</div>
      <div class="flashcard-reveal" id="fcReveal" style="display:none;">
        <div class="flashcard-pos">${w.pos}</div>
        <div class="flashcard-def">${w.def}</div>${w.vn?`<div style="color:#c2410c;font-style:italic;margin-top:4px;">🇻🇳 ${w.vn}</div>`:''}
        <div class="flashcard-ex">"${w.ex}"</div>
      </div>
    </div>
    <button class="btn btn-primary" id="fcBtn" onclick="revealFlashcard()">Show Answer</button>
    <div style="margin-top:12px;display:flex;gap:8px;justify-content:center;">
      <button class="btn btn-sm" onclick="prevFlashcard()">Previous</button>
      <button class="btn btn-sm" onclick="nextFlashcard()">Next</button>
    </div>`;
}
function revealFlashcard(){document.getElementById('fcReveal').style.display='block';document.getElementById('fcBtn').style.display='none';}
function nextFlashcard(){flashcardIdx=(flashcardIdx+1)%flashcardWords.length;showFlashcard();}
function prevFlashcard(){flashcardIdx=(flashcardIdx-1+flashcardWords.length)%flashcardWords.length;showFlashcard();}

// Quiz
function openQuiz(){
  const topics=currentTopic==='all'?vocabTopics:vocabTopics.filter(t=>t.id===currentTopic);
  quizWords=[]; topics.forEach(t=>quizWords.push(...t.words));
  quizWords.sort(()=>Math.random()-0.5).splice(10);
  quizIdx=0; quizScore=0; quizAnswered=false;
  showQuizQuestion();
  document.getElementById('modalOverlay').classList.add('show');
}
function showQuizQuestion(){
  if(quizIdx>=quizWords.length){showQuizResult();return;}
  const w=quizWords[quizIdx];
  const allWords=getAllWords().filter(x=>x.w!==w.w);
  const wrong=allWords.sort(()=>Math.random()-0.5).slice(0,3).map(x=>x.def);
  const options=[w.def,...wrong].sort(()=>Math.random()-0.5);
  quizAnswered=false;
  document.getElementById('modalContent').innerHTML=`
    <button class="modal-close" onclick="closeModal()">&times;</button>
    <h3 style="margin-bottom:8px;">Quiz Mode</h3>
    <div class="flashcard-counter">Question ${quizIdx+1} / ${quizWords.length}</div>
    <div class="flashcard">
      <div class="flashcard-word">${w.w}</div>
      <div class="flashcard-ipa">${w.ipa}</div>
    </div>
    <p style="font-weight:600;margin-bottom:8px;">Choose the correct definition:</p>
    ${options.map((o,i)=>`<button class="quiz-option" id="qo${i}" onclick="answerQuiz(${i},'${o===w.def}')">${o}</button>`).join('')}
    <div class="quiz-score">Score: ${quizScore}/${quizWords.length}</div>`;
}
function answerQuiz(idx,isCorrectStr){
  if(quizAnswered)return;
  quizAnswered=true;
  const isCorrect=isCorrectStr==='true';
  if(isCorrect)quizScore++;
  const btns=document.querySelectorAll('.quiz-option');
  btns.forEach((b,i)=>{
    if(i===idx&&!isCorrect) b.classList.add('wrong-answer');
    // find correct
    const w=quizWords[quizIdx];
    if(b.textContent===w.def) b.classList.add('correct-answer');
  });
  setTimeout(()=>{quizIdx++;showQuizQuestion();},1200);
}
function showQuizResult(){
  const pct=Math.round(quizScore/quizWords.length*100);
  document.getElementById('modalContent').innerHTML=`
    <button class="modal-close" onclick="closeModal()">&times;</button>
    <h3>Quiz Complete!</h3>
    <div class="flashcard" style="min-height:100px;">
      <div class="flashcard-word" style="font-size:2.5rem;color:var(--primary);">${pct}%</div>
      <div style="font-size:1.1rem;margin-top:8px;">${quizScore} out of ${quizWords.length} correct</div>
    </div>
    <button class="btn btn-primary" onclick="openQuiz()">Try Again</button>
    <button class="btn" onclick="closeModal()" style="margin-left:8px;">Close</button>`;
}
function closeModal(){document.getElementById('modalOverlay').classList.remove('show');}
document.getElementById('modalOverlay').addEventListener('click',function(e){if(e.target===this)closeModal();});

// ===== EXPORT / IMPORT =====
function exportProgress() {
  const data = {
    version: 1,
    exportedAt: new Date().toISOString(),
    learnedWords: JSON.parse(localStorage.getItem('learnedWords') || '{}'),
    dailyLearning: JSON.parse(localStorage.getItem('dailyLearning') || '{}'),
    dailyTarget: localStorage.getItem('dailyTarget') || '10',
    theme: localStorage.getItem('theme') || 'light',
    gettingStartedDismissed: localStorage.getItem('gettingStartedDismissed') || 'false'
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'english-hub-progress-' + getTodayKey() + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importProgress(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.learnedWords) throw new Error('Invalid file format');

      // Merge or replace — ask user
      const existingCount = Object.keys(learnedWords).length;
      let doMerge = false;
      if (existingCount > 0) {
        doMerge = confirm(
          'You have ' + existingCount + ' learned words.\n\n' +
          'OK = Merge (keep both)\n' +
          'Cancel = Replace (overwrite with file)'
        );
      }

      if (doMerge) {
        // Merge learned words
        const imported = data.learnedWords || {};
        Object.keys(imported).forEach(w => { learnedWords[w] = true; });
        // Merge daily data
        const currentDaily = getDailyData();
        const importedDaily = data.dailyLearning || {};
        Object.keys(importedDaily).forEach(day => {
          if (!currentDaily[day]) currentDaily[day] = [];
          importedDaily[day].forEach(w => {
            if (!currentDaily[day].includes(w)) currentDaily[day].push(w);
          });
        });
        saveDailyData(currentDaily);
      } else {
        // Replace
        learnedWords = data.learnedWords || {};
        if (data.dailyLearning) saveDailyData(data.dailyLearning);
      }

      localStorage.setItem('learnedWords', JSON.stringify(learnedWords));
      if (data.dailyTarget) localStorage.setItem('dailyTarget', data.dailyTarget);
      if (data.theme) {
        localStorage.setItem('theme', data.theme);
        document.body.classList.toggle('dark', data.theme === 'dark');
        document.getElementById('themeToggle').textContent = data.theme === 'dark' ? 'Light' : 'Dark';
      }
      if (data.gettingStartedDismissed) {
        localStorage.setItem('gettingStartedDismissed', data.gettingStartedDismissed);
      }

      // Re-render everything
      renderVocabStats();
      renderTopicChips();
      renderVocab();
      renderDashboard();

      const totalImported = Object.keys(learnedWords).length;
      alert('Imported successfully! ' + totalImported + ' words marked as learned.');
    } catch (err) {
      alert('Error importing file: ' + err.message + '\n\nMake sure you selected a valid English Hub progress file.');
    }
  };
  reader.readAsText(file);
  // Reset input so same file can be re-imported
  event.target.value = '';
}

// Active nav highlight
window.addEventListener('scroll',function(){
  const sections=['dashboard','ipa','vocabulary','grammar'];
  let current='';
  sections.forEach(id=>{
    const el=document.getElementById(id);
    if(el&&el.getBoundingClientRect().top<150) current=id;
  });
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active',a.getAttribute('href')==='#'+current);
  });
});

// Init
renderIPA();
renderVocabStats();
renderTopicChips();
renderVocab();
renderGrammar();
renderDashboard();
// Hide getting started if dismissed
if(localStorage.getItem('gettingStartedDismissed')==='true'){
  document.getElementById('gettingStarted').style.display='none';
}
