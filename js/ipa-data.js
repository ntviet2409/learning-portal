// ===== IPA DATA =====
const ipaData = {
shortVowels: [
  {s:"/ɪ/",w:"ship",p:"ih",d:"Short, relaxed 'i'; tongue slightly lower than 'ee'",vn:"Gần giống 'i' ngắn trong 'đi'"},
  {s:"/e/",w:"bed",p:"eh",d:"Tongue mid-front; mouth slightly open",vn:"Giống 'e' trong 'xe'"},
  {s:"/ae/",w:"cat",p:"aah",d:"Mouth wide open; tongue low and front",vn:"Giữa 'a' và 'e'; không có trong tiếng Việt"},
  {s:"/ʌ/",w:"cup",p:"uh",d:"Short, central vowel; mouth slightly open",vn:"Gần giống 'ơ' ngắn trong 'bơ'"},
  {s:"/ɒ/",w:"hot",p:"ah",d:"Rounded lips; tongue low and back (British)",vn:"Giống 'o' trong 'bò'"},
  {s:"/ʊ/",w:"book",p:"oo",d:"Short, relaxed 'oo'; lips slightly rounded",vn:"Gần giống 'u' ngắn trong 'tu'"},
  {s:"/ə/",w:"about",p:"uh",d:"The 'schwa'; neutral, unstressed sound",vn:"Giống 'ơ' nhẹ, không nhấn; rất phổ biến"},
],
longVowels: [
  {s:"/iː/",w:"sheep",p:"eee",d:"Long 'ee'; tongue high and front, lips spread",vn:"Giống 'i' dài trong 'đi' nhưng kéo dài hơn"},
  {s:"/ɑː/",w:"car",p:"ahhh",d:"Long 'ah'; mouth wide open, tongue low and back",vn:"Giống 'a' dài trong 'ba'"},
  {s:"/ɔː/",w:"door",p:"aww",d:"Long 'aw'; lips rounded, tongue mid-back",vn:"Giống 'o' dài trong 'bò' nhưng kéo dài"},
  {s:"/uː/",w:"blue",p:"ooo",d:"Long 'oo'; lips tightly rounded, tongue high and back",vn:"Giống 'u' dài trong 'mù'"},
  {s:"/ɜː/",w:"bird",p:"err",d:"Long central vowel; tongue mid-central, lips neutral",vn:"Giống 'ơ' dài; không có chính xác trong tiếng Việt"},
],
diphthongs: [
  {s:"/eɪ/",w:"face",p:"ay",d:"Glides from 'e' to 'i'; as in 'day'",vn:"Giống 'ây' trong 'cây'"},
  {s:"/aɪ/",w:"price",p:"eye",d:"Glides from open 'a' to 'i'; as in 'my'",vn:"Giống 'ai' trong 'hai'"},
  {s:"/ɔɪ/",w:"choice",p:"oy",d:"Glides from 'aw' to 'i'; as in 'boy'",vn:"Giống 'oi' trong 'bồi'"},
  {s:"/aʊ/",w:"mouth",p:"ow",d:"Glides from open 'a' to 'oo'; as in 'cow'",vn:"Giống 'ao' trong 'cao'"},
  {s:"/əʊ/",w:"goat",p:"oh",d:"Glides from schwa to 'oo'; as in 'no'",vn:"Giống 'âu' trong 'câu'"},
  {s:"/ɪə/",w:"near",p:"ear",d:"Glides from 'i' to schwa; as in 'here'",vn:"Giống 'ia' trong 'mía'"},
  {s:"/eə/",w:"square",p:"air",d:"Glides from 'e' to schwa; as in 'air'",vn:"Gần giống 'e-ơ'; không có trong tiếng Việt"},
  {s:"/ʊə/",w:"cure",p:"oor",d:"Glides from 'oo' to schwa; as in 'tour'",vn:"Gần giống 'ua' trong 'mua'"},
],
voicelessCons: [
  {s:"/p/",w:"pen",p:"puh",d:"Lips together, released with a puff of air",vn:"Giống 'p' trong 'pin'; bật hơi mạnh hơn"},
  {s:"/t/",w:"ten",p:"tuh",d:"Tongue tip touches ridge behind upper teeth",vn:"Giống 't' trong 'tin'; đầu lưỡi chạm lợi"},
  {s:"/k/",w:"cat",p:"kuh",d:"Back of tongue touches soft palate",vn:"Giống 'c/k' trong 'cá'"},
  {s:"/f/",w:"fan",p:"fff",d:"Upper teeth touch lower lip; air flows through",vn:"Giống 'ph' trong 'phố'"},
  {s:"/θ/",w:"think",p:"thh",d:"Tongue tip between teeth; air flows over tongue",vn:"Đặt lưỡi giữa hai hàm răng; không có trong tiếng Việt"},
  {s:"/s/",w:"see",p:"sss",d:"Tongue near ridge; hissing air through narrow gap",vn:"Giống 's' trong 'sáu'"},
  {s:"/ʃ/",w:"she",p:"shh",d:"Tongue raised, lips slightly rounded; 'sh' sound",vn:"Gần giống 'x' trong 'xin' nhưng tròn môi hơn"},
  {s:"/tʃ/",w:"church",p:"chuh",d:"Starts like /t/ then releases to /ʃ/; 'ch' sound",vn:"Giống 'ch' trong 'chào'"},
  {s:"/h/",w:"hat",p:"huh",d:"Glottis open; gentle breath of air",vn:"Giống 'h' trong 'hoa'"},
],
voicedCons: [
  {s:"/b/",w:"bag",p:"buh",d:"Like /p/ but vocal cords vibrate",vn:"Giống 'b' trong 'ba'"},
  {s:"/d/",w:"dog",p:"duh",d:"Like /t/ but vocal cords vibrate",vn:"Giống 'đ' trong 'đi'"},
  {s:"/ɡ/",w:"go",p:"guh",d:"Like /k/ but vocal cords vibrate",vn:"Giống 'g' trong 'gà'"},
  {s:"/v/",w:"van",p:"vvv",d:"Like /f/ but vocal cords vibrate",vn:"Giống 'v' trong 'và'"},
  {s:"/ð/",w:"this",p:"thh",d:"Like /θ/ but vocal cords vibrate",vn:"Giống /θ/ nhưng rung dây thanh; không có trong tiếng Việt"},
  {s:"/z/",w:"zoo",p:"zzz",d:"Like /s/ but vocal cords vibrate",vn:"Giống 'd/gi' trong 'da/gia' (miền Bắc)"},
  {s:"/ʒ/",w:"vision",p:"zhh",d:"Like /ʃ/ but vocal cords vibrate",vn:"Gần giống 'gi' nhưng tròn môi; hiếm trong tiếng Việt"},
  {s:"/dʒ/",w:"judge",p:"juh",d:"Like /tʃ/ but vocal cords vibrate; 'j' sound",vn:"Gần giống 'tr' trong 'trời' (miền Nam)"},
],
nasals: [
  {s:"/m/",w:"man",p:"mmm",d:"Lips closed; air flows through nose",vn:"Giống 'm' trong 'mẹ'"},
  {s:"/n/",w:"no",p:"nnn",d:"Tongue tip on ridge; air flows through nose",vn:"Giống 'n' trong 'nó'"},
  {s:"/ŋ/",w:"sing",p:"ng",d:"Back of tongue on soft palate; air through nose",vn:"Giống 'ng' trong 'ngày'"},
  {s:"/l/",w:"leg",p:"lll",d:"Tongue tip on ridge; air flows around sides",vn:"Giống 'l' trong 'là'"},
  {s:"/r/",w:"red",p:"rrr",d:"Tongue curled back, not touching roof of mouth",vn:"Uốn lưỡi; khác 'r' tiếng Việt"},
  {s:"/w/",w:"wet",p:"wuh",d:"Lips rounded; glide to the next vowel",vn:"Giống 'qu' trong 'qua' (phần 'u')"},
  {s:"/j/",w:"yes",p:"yuh",d:"Tongue high and front; glide to next vowel",vn:"Giống 'y/d' trong 'yêu/diêu'"},
],
minimalPairs: [
  {a:"ship /ʃɪp/",b:"sheep /ʃiːp/",diff:"/ɪ/ vs /iː/"},
  {a:"bat /baet/",b:"bet /bet/",diff:"/ae/ vs /e/"},
  {a:"cat /kaet/",b:"cut /kʌt/",diff:"/ae/ vs /ʌ/"},
  {a:"full /fʊl/",b:"fool /fuːl/",diff:"/ʊ/ vs /uː/"},
  {a:"pen /pen/",b:"pan /paen/",diff:"/e/ vs /ae/"},
  {a:"sit /sɪt/",b:"set /set/",diff:"/ɪ/ vs /e/"},
  {a:"pot /pɒt/",b:"put /pʊt/",diff:"/ɒ/ vs /ʊ/"},
  {a:"thin /θɪn/",b:"tin /tɪn/",diff:"/θ/ vs /t/"},
  {a:"van /vaen/",b:"fan /faen/",diff:"/v/ vs /f/"},
  {a:"rice /raɪs/",b:"lice /laɪs/",diff:"/r/ vs /l/"},
  {a:"sink /sɪŋk/",b:"think /θɪŋk/",diff:"/s/ vs /θ/"},
  {a:"west /west/",b:"rest /rest/",diff:"/w/ vs /r/"},
]
};

// Google Cloud TTS Chirp3-HD audio → Web Speech API fallback
let _currentAudio = null;
function speak(text, rate) {
  if (_currentAudio) { _currentAudio.pause(); _currentAudio = null; }
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (!text) return;

  // Try Google TTS local audio
  if (typeof AUDIO_MAP !== 'undefined' && AUDIO_MAP[text.toLowerCase()]) {
    const url = 'audio/google/' + AUDIO_MAP[text.toLowerCase()] + '.mp3';
    _currentAudio = new Audio(url);
    if (rate) _currentAudio.playbackRate = rate;
    _currentAudio.onerror = function() { speakBrowserTTS(text, rate); };
    _currentAudio.play().catch(function() { speakBrowserTTS(text, rate); });
    return;
  }

  // Fallback: browser TTS
  speakBrowserTTS(text, rate);
}

function speakBrowserTTS(text, rate) {
  if (!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = rate || 0.8;
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en'));
  if (enVoice) u.voice = enVoice;
  window.speechSynthesis.speak(u);
}
if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// ===== VOICE RECORDING =====
let currentRecorder = null;
let currentRecordingKey = null;

function getRecKey(symbol, word) {
  return 'rec_' + symbol.replace(/[/]/g, '').replace(/[^a-zA-Z0-9]/g, '_') + '_' + word;
}

function getRecordings() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('rec_')) keys.push(k);
  }
  return keys;
}

function startRecording(symbol, word) {
  const key = getRecKey(symbol, word);
  if (currentRecorder && currentRecorder.state === 'recording') {
    stopRecording();
    return;
  }
  navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    const recorder = new MediaRecorder(stream);
    const chunks = [];
    currentRecorder = recorder;
    currentRecordingKey = key;
    recorder.ondataavailable = e => chunks.push(e.data);
    recorder.onstop = () => {
      stream.getTracks().forEach(t => t.stop());
      const blob = new Blob(chunks, { type: 'audio/webm' });
      const reader = new FileReader();
      reader.onloadend = () => {
        try {
          localStorage.setItem(key, reader.result);
        } catch (e) {
          alert('Storage full! Delete some recordings to make space.');
        }
        currentRecorder = null;
        currentRecordingKey = null;
        renderIPA();
        updateRecReviewBar();
      };
      reader.readAsDataURL(blob);
    };
    recorder.start();
    renderIPA();
    // Auto-stop after 5 seconds
    setTimeout(() => {
      if (recorder.state === 'recording') recorder.stop();
    }, 5000);
  }).catch(err => {
    alert('Microphone access denied. Please allow microphone access to record your pronunciation.');
  });
}

function stopRecording() {
  if (currentRecorder && currentRecorder.state === 'recording') {
    currentRecorder.stop();
  }
}

function deleteRecording(symbol, word) {
  const key = getRecKey(symbol, word);
  localStorage.removeItem(key);
  renderIPA();
  updateRecReviewBar();
  renderRecReviewPanel();
}

function playRecording(symbol, word) {
  const key = getRecKey(symbol, word);
  const data = localStorage.getItem(key);
  if (data) {
    const audio = new Audio(data);
    audio.play();
  }
}

function updateRecReviewBar() {
  const recs = getRecordings();
  const bar = document.getElementById('recReviewBar');
  const countEl = document.getElementById('recCount');
  if (recs.length > 0) {
    bar.style.display = 'flex';
    countEl.innerHTML = '<strong>' + recs.length + '</strong> recording' + (recs.length > 1 ? 's' : '') + ' saved';
  } else {
    bar.style.display = 'none';
    document.getElementById('recReviewPanel').style.display = 'none';
  }
}

function toggleRecReviewPanel() {
  const panel = document.getElementById('recReviewPanel');
  if (panel.style.display === 'none') {
    panel.style.display = 'block';
    renderRecReviewPanel();
  } else {
    panel.style.display = 'none';
  }
}

function renderRecReviewPanel() {
  const recs = getRecordings();
  const grid = document.getElementById('recReviewGrid');
  if (!recs.length) {
    grid.innerHTML = '<p style="color:var(--text-secondary);padding:12px;">No recordings yet.</p>';
    return;
  }
  // Find matching IPA data for each recording
  const allSounds = [
    ...ipaData.shortVowels, ...ipaData.longVowels, ...ipaData.diphthongs,
    ...ipaData.voicelessCons, ...ipaData.voicedCons, ...ipaData.nasals
  ];
  grid.innerHTML = recs.map(key => {
    const data = localStorage.getItem(key);
    // Find matching sound
    const match = allSounds.find(x => getRecKey(x.s, x.w) === key);
    const symbol = match ? match.s : key.replace('rec_', '');
    const word = match ? match.w : '';
    return `<div class="rec-review-card">
      <div class="rec-info">
        <span class="rec-symbol">${symbol}</span>
        <span class="rec-word">${word}</span>
      </div>
      <audio controls src="${data}"></audio>
      <button class="rec-delete-btn" onclick="if(confirm('Delete this recording?')){localStorage.removeItem('${key}');updateRecReviewBar();renderRecReviewPanel();}" title="Delete">&#128465;</button>
    </div>`;
  }).join('');
}

function clearAllRecordings() {
  if (!confirm('Delete ALL recordings? This cannot be undone.')) return;
  getRecordings().forEach(k => localStorage.removeItem(k));
  renderIPA();
  updateRecReviewBar();
  renderRecReviewPanel();
}

function exportRecordingsZip() {
  const recs = getRecordings();
  if (!recs.length) { alert('No recordings to export.'); return; }

  // Find matching IPA data
  const allSounds = [
    ...ipaData.shortVowels, ...ipaData.longVowels, ...ipaData.diphthongs,
    ...ipaData.voicelessCons, ...ipaData.voicedCons, ...ipaData.nasals
  ];

  // We'll create a simple combined file since we can't use JSZip without a dependency
  // Instead, export each recording individually with a manifest
  const manifest = [];
  const downloads = [];

  recs.forEach((key, i) => {
    const data = localStorage.getItem(key);
    const match = allSounds.find(x => getRecKey(x.s, x.w) === key);
    const symbol = match ? match.s : key;
    const word = match ? match.w : '';
    const filename = (i + 1).toString().padStart(2, '0') + '-' + word + '.webm';
    manifest.push({ filename, symbol, word });
    downloads.push({ filename, data });
  });

  // Create manifest JSON
  const manifestBlob = new Blob([JSON.stringify({
    exportedAt: new Date().toISOString(),
    totalRecordings: recs.length,
    recordings: manifest
  }, null, 2)], { type: 'application/json' });

  // Download manifest
  const mUrl = URL.createObjectURL(manifestBlob);
  const mA = document.createElement('a');
  mA.href = mUrl;
  mA.download = 'recordings-manifest.json';
  document.body.appendChild(mA);
  mA.click();
  document.body.removeChild(mA);
  URL.revokeObjectURL(mUrl);

  // Download each recording
  let delay = 300;
  downloads.forEach((dl, i) => {
    setTimeout(() => {
      // Convert base64 data URL to blob
      const parts = dl.data.split(',');
      const mime = parts[0].match(/:(.*?);/)[1];
      const bstr = atob(parts[1]);
      const arr = new Uint8Array(bstr.length);
      for (let j = 0; j < bstr.length; j++) arr[j] = bstr.charCodeAt(j);
      const blob = new Blob([arr], { type: mime });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = dl.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, delay * (i + 1));
  });

  alert('Exporting ' + downloads.length + ' recordings + manifest file.\nYour browser may ask to allow multiple downloads.');
}

function renderIPA(){
  const render=(id,arr)=>{
    document.getElementById(id).innerHTML=arr.map(x=>{
      const key = getRecKey(x.s, x.w);
      const hasRec = !!localStorage.getItem(key);
      const isRecording = currentRecorder && currentRecorder.state === 'recording' && currentRecordingKey === key;
      return `<div class="ipa-card">
        <div class="ipa-symbol">${x.s} <button class="speak-btn" title="Hear the sound" onclick="event.stopPropagation();speakBrowserTTS('${x.p}', 0.5)" style="font-size:0.9rem;width:26px;height:26px;vertical-align:middle;">&#128263;</button></div>
        <div class="ipa-word">${x.w} <button class="speak-btn" title="Hear the word" onclick="event.stopPropagation();speak('${x.w}', 0.7)">&#128264;</button></div>
        <div class="ipa-desc">${x.d}</div>${x.vn?`<div class="ipa-vn">🇻🇳 ${x.vn}</div>`:''}
        <div class="ipa-rec-row">
          <button class="rec-btn ${isRecording ? 'recording' : ''} ${hasRec && !isRecording ? 'has-recording' : ''}" onclick="event.stopPropagation();${isRecording ? 'stopRecording()' : `startRecording('${x.s.replace(/'/g,"\\'")}','${x.w}')`}">
            ${isRecording ? '<span class="rec-dot"></span> Stop' : (hasRec ? '&#9679; Re-record' : '&#9679; Record')}
          </button>
          ${hasRec ? `<button class="rec-btn has-recording" onclick="event.stopPropagation();playRecording('${x.s.replace(/'/g,"\\'")}','${x.w}')" title="Play your recording">&#9654; My voice</button>
          <button class="rec-btn" onclick="event.stopPropagation();deleteRecording('${x.s.replace(/'/g,"\\'")}','${x.w}')" title="Delete recording">&#128465;</button>` : ''}
        </div>
      </div>`;
    }).join('');
  };
  render('ipaShortVowels',ipaData.shortVowels);
  render('ipaLongVowels',ipaData.longVowels);
  render('ipaDiphthongs',ipaData.diphthongs);
  render('ipaVoicelessCons',ipaData.voicelessCons);
  render('ipaVoicedCons',ipaData.voicedCons);
  render('ipaNasals',ipaData.nasals);
  document.getElementById('minimalPairs').innerHTML=ipaData.minimalPairs.map(x=>
    `<div class="card mp-card"><div><strong>${x.a.split(' ')[0]}</strong> <button class="speak-btn" onclick="speak('${x.a.split(' ')[0]}', 0.7)">&#128264;</button><br><span class="ipa-desc">${x.a.split(' ').slice(1).join(' ')}</span></div><div class="mp-vs">vs</div><div><strong>${x.b.split(' ')[0]}</strong> <button class="speak-btn" onclick="speak('${x.b.split(' ')[0]}', 0.7)">&#128264;</button><br><span class="ipa-desc">${x.b.split(' ').slice(1).join(' ')}</span></div><div class="ipa-desc">${x.diff}</div></div>`
  ).join('');
  updateRecReviewBar();
}

