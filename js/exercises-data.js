// Grammar Exercises — 50+ questions per tense
// Uses vocabulary from the portal for familiar context

const GRAMMAR_EXERCISES = {
  'Present Simple': {
    desc: 'S + V(s/es) — Facts, habits, routines',
    questions: [
      {q:'She ___ (go) to school every day.', a:'goes', type:'fill'},
      {q:'I ___ (not/like) coffee.', a:"don't like", type:'fill'},
      {q:'___ he ___ (work) here?', a:'Does...work', type:'fill'},
      {q:'They ___ English very well.', options:['speaks','speak','speaking','spoke'], a:1, type:'mc'},
      {q:'My father ___ at 6 AM every morning.', options:['wake up','wakes up','waking up','woke up'], a:1, type:'mc'},
      {q:'She ___ (not/understand) Chinese.', a:"doesn't understand", type:'fill'},
      {q:'Water ___ at 100 degrees Celsius.', options:['boil','boils','boiling','boiled'], a:1, type:'mc'},
      {q:'I always ___ (eat) breakfast before work.', a:'eat', type:'fill'},
      {q:'He ___ (live) in Ho Chi Minh City.', a:'lives', type:'fill'},
      {q:'___ you ___ (know) the answer?', a:'Do...know', type:'fill'},
      {q:'The sun ___ in the east.', options:['rise','rises','rising','rose'], a:1, type:'mc'},
      {q:'She never ___ (drink) milk.', a:'drinks', type:'fill'},
      {q:'We ___ (not/have) a car.', a:"don't have", type:'fill'},
      {q:'___ she ___ (speak) English?', a:'Does...speak', type:'fill'},
      {q:'My mother ___ (cook) dinner every evening.', a:'cooks', type:'fill'},
      {q:'They ___ (not/want) to go out.', a:"don't want", type:'fill'},
      {q:'He ___ (teach) math at the university.', a:'teaches', type:'fill'},
      {q:'I ___ (need) help with this.', a:'need', type:'fill'},
      {q:'___ it ___ (rain) a lot in Saigon?', a:'Does...rain', type:'fill'},
      {q:'She ___ (study) English every day.', a:'studies', type:'fill'},
      {q:'We usually ___ (walk) to school.', a:'walk', type:'fill'},
      {q:'He ___ TV in the evening.', options:['watch','watches','watching','watched'], a:1, type:'mc'},
      {q:'I ___ (not/think) that is correct.', a:"don't think", type:'fill'},
      {q:'___ they ___ (live) near the school?', a:'Do...live', type:'fill'},
      {q:'The bus ___ at 7:30 AM.', options:['leave','leaves','leaving','left'], a:1, type:'mc'},
      {q:'She ___ (have) two brothers.', a:'has', type:'fill'},
      {q:'We ___ (not/play) football on Sundays.', a:"don't play", type:'fill'},
      {q:'___ your mother ___ (work) at a hospital?', a:'Does...work', type:'fill'},
      {q:'He ___ (run) 5 km every morning.', a:'runs', type:'fill'},
      {q:'Fish ___ in water.', options:['live','lives','living','lived'], a:0, type:'mc'},
      {q:'I ___ (not/eat) meat. I am vegetarian.', a:"don't eat", type:'fill'},
      {q:'___ you ___ (like) Vietnamese food?', a:'Do...like', type:'fill'},
      {q:'She ___ (fly) to Singapore every month.', a:'flies', type:'fill'},
      {q:'My dog ___ (not/like) cats.', a:"doesn't like", type:'fill'},
      {q:'___ he ___ (drive) to work?', a:'Does...drive', type:'fill'},
      {q:'The store ___ at 9 AM.', options:['open','opens','opening','opened'], a:1, type:'mc'},
      {q:'I ___ (read) the newspaper every morning.', a:'read', type:'fill'},
      {q:'She ___ (not/listen) to music at work.', a:"doesn't listen", type:'fill'},
      {q:'___ they ___ (sell) fresh fruit?', a:'Do...sell', type:'fill'},
      {q:'He always ___ (arrive) late.', a:'arrives', type:'fill'},
      {q:'We ___ (meet) our friends every weekend.', a:'meet', type:'fill'},
      {q:'She ___ (not/wear) glasses.', a:"doesn't wear", type:'fill'},
      {q:'I ___ coffee every morning.', options:['drink','drinks','drinking','drank'], a:0, type:'mc'},
      {q:'The earth ___ around the sun.', options:['move','moves','moving','moved'], a:1, type:'mc'},
      {q:'He ___ (not/speak) French.', a:"doesn't speak", type:'fill'},
      {q:'___ she ___ (know) your name?', a:'Does...know', type:'fill'},
      {q:'We ___ (enjoy) traveling.', a:'enjoy', type:'fill'},
      {q:'She ___ to the gym three times a week.', options:['go','goes','going','went'], a:1, type:'mc'},
      {q:'I ___ (not/remember) his name.', a:"don't remember", type:'fill'},
      {q:'___ you ___ (want) some water?', a:'Do...want', type:'fill'},
    ]
  },

  'Present Continuous': {
    desc: 'S + am/is/are + V-ing — Happening NOW',
    questions: [
      {q:'I ___ (study) English right now.', a:'am studying', type:'fill'},
      {q:'She ___ (not/work) today.', a:"isn't working", type:'fill'},
      {q:'___ they ___ (play) football?', a:'Are...playing', type:'fill'},
      {q:'He ___ a book at the moment.', options:['reads','is reading','read','reading'], a:1, type:'mc'},
      {q:'We ___ (wait) for the bus.', a:'are waiting', type:'fill'},
      {q:'___ you ___ (listen) to me?', a:'Are...listening', type:'fill'},
      {q:'She ___ (cook) dinner right now.', a:'is cooking', type:'fill'},
      {q:'They ___ (not/sleep) yet.', a:"aren't sleeping", type:'fill'},
      {q:'Look! It ___ (rain).', a:'is raining', type:'fill'},
      {q:'I ___ (not/eat) anything. I am not hungry.', a:"am not eating", type:'fill'},
      {q:'___ he ___ (drive) to work now?', a:'Is...driving', type:'fill'},
      {q:'We ___ (learn) new words this week.', a:'are learning', type:'fill'},
      {q:'She ___ to music right now.', options:['listens','is listening','listen','listening'], a:1, type:'mc'},
      {q:'The children ___ (play) in the garden.', a:'are playing', type:'fill'},
      {q:'I ___ (write) an email to my friend.', a:'am writing', type:'fill'},
      {q:'He ___ (not/come) to the party tonight.', a:"isn't coming", type:'fill'},
      {q:'___ she ___ (wear) a red dress?', a:'Is...wearing', type:'fill'},
      {q:'They ___ (build) a new house.', a:'are building', type:'fill'},
      {q:'I ___ (not/watch) TV. I am busy.', a:"am not watching", type:'fill'},
      {q:'Look! The cat ___ (sit) on the table.', a:'is sitting', type:'fill'},
      {q:'We ___ for our teacher.', options:['wait','are waiting','waiting','waits'], a:1, type:'mc'},
      {q:'He ___ (talk) on the phone.', a:'is talking', type:'fill'},
      {q:'___ you ___ (enjoy) the movie?', a:'Are...enjoying', type:'fill'},
      {q:'She ___ (run) in the park.', a:'is running', type:'fill'},
      {q:'They ___ (not/do) their homework.', a:"aren't doing", type:'fill'},
      {q:'I ___ (try) to learn Chinese.', a:'am trying', type:'fill'},
      {q:'He ___ (not/feel) well today.', a:"isn't feeling", type:'fill'},
      {q:'___ it ___ (snow) outside?', a:'Is...snowing', type:'fill'},
      {q:'We ___ (have) dinner now.', a:'are having', type:'fill'},
      {q:'She ___ (look) for her keys.', a:'is looking', type:'fill'},
      {q:'Right now I ___ at my desk.', options:['sit','am sitting','sits','sitting'], a:1, type:'mc'},
      {q:'___ they ___ (move) to a new house?', a:'Are...moving', type:'fill'},
      {q:'He ___ (drink) coffee at the moment.', a:'is drinking', type:'fill'},
      {q:'She ___ (not/use) the computer now.', a:"isn't using", type:'fill'},
      {q:'I ___ (help) my mother with cooking.', a:'am helping', type:'fill'},
      {q:'___ you ___ (wait) for someone?', a:'Are...waiting', type:'fill'},
      {q:'They ___ (walk) to school today.', a:'are walking', type:'fill'},
      {q:'He ___ (not/work) this week. He is on holiday.', a:"isn't working", type:'fill'},
      {q:'Look! She ___ (dance).', a:'is dancing', type:'fill'},
      {q:'We ___ (plan) a trip to Singapore.', a:'are planning', type:'fill'},
      {q:'___ he ___ (teach) today?', a:'Is...teaching', type:'fill'},
      {q:'I ___ (get) better at English.', a:'am getting', type:'fill'},
      {q:'She ___ (not/eat) lunch yet.', a:"isn't eating", type:'fill'},
      {q:'The baby ___ (cry). Can you check?', a:'is crying', type:'fill'},
      {q:'We ___ (not/go) out tonight.', a:"aren't going", type:'fill'},
      {q:'___ she ___ (read) a new book?', a:'Is...reading', type:'fill'},
      {q:'I ___ this exercise right now.', options:['do','am doing','does','doing'], a:1, type:'mc'},
      {q:'They ___ (prepare) for the exam.', a:'are preparing', type:'fill'},
      {q:'He ___ (make) a sandwich for lunch.', a:'is making', type:'fill'},
      {q:'She ___ to her friend on the phone.', options:['talks','is talking','talk','talking'], a:1, type:'mc'},
    ]
  },

  'Past Simple': {
    desc: 'S + V-ed / V2 — Completed actions in the past',
    questions: [
      {q:'I ___ (go) to school yesterday.', a:'went', type:'fill'},
      {q:'She ___ (not/see) the movie.', a:"didn't see", type:'fill'},
      {q:'___ you ___ (eat) breakfast this morning?', a:'Did...eat', type:'fill'},
      {q:'He ___ to the office by bus yesterday.', options:['go','goes','went','going'], a:2, type:'mc'},
      {q:'We ___ (buy) a new car last month.', a:'bought', type:'fill'},
      {q:'___ she ___ (speak) to the teacher?', a:'Did...speak', type:'fill'},
      {q:'They ___ (not/come) to the party.', a:"didn't come", type:'fill'},
      {q:'I ___ (meet) my friend last week.', a:'met', type:'fill'},
      {q:'She ___ (write) a long email yesterday.', a:'wrote', type:'fill'},
      {q:'___ he ___ (find) his keys?', a:'Did...find', type:'fill'},
      {q:'We ___ (not/know) about the meeting.', a:"didn't know", type:'fill'},
      {q:'She ___ very tired yesterday.', options:['is','was','were','been'], a:1, type:'mc'},
      {q:'I ___ (read) three books last month.', a:'read', type:'fill'},
      {q:'They ___ (leave) the office at 5 PM.', a:'left', type:'fill'},
      {q:'___ you ___ (enjoy) the concert?', a:'Did...enjoy', type:'fill'},
      {q:'He ___ (not/tell) me about it.', a:"didn't tell", type:'fill'},
      {q:'She ___ (take) the bus to work.', a:'took', type:'fill'},
      {q:'We ___ (have) a great time at the beach.', a:'had', type:'fill'},
      {q:'I ___ (not/understand) the lesson.', a:"didn't understand", type:'fill'},
      {q:'___ they ___ (drive) to the airport?', a:'Did...drive', type:'fill'},
      {q:'He ___ the answer to the question.', options:['know','knew','known','knows'], a:1, type:'mc'},
      {q:'She ___ (give) me a birthday present.', a:'gave', type:'fill'},
      {q:'I ___ (think) it was a good idea.', a:'thought', type:'fill'},
      {q:'___ she ___ (bring) the documents?', a:'Did...bring', type:'fill'},
      {q:'We ___ (not/feel) well after dinner.', a:"didn't feel", type:'fill'},
      {q:'He ___ (make) breakfast for everyone.', a:'made', type:'fill'},
      {q:'They ___ to Japan last summer.', options:['fly','flew','flown','flying'], a:1, type:'mc'},
      {q:'I ___ (not/sleep) well last night.', a:"didn't sleep", type:'fill'},
      {q:'___ you ___ (pay) for the meal?', a:'Did...pay', type:'fill'},
      {q:'She ___ (run) 10 km yesterday.', a:'ran', type:'fill'},
      {q:'He ___ (not/hear) the phone ringing.', a:"didn't hear", type:'fill'},
      {q:'We ___ (sit) in the front row.', a:'sat', type:'fill'},
      {q:'___ he ___ (break) the window?', a:'Did...break', type:'fill'},
      {q:'I ___ (put) the book on the table.', a:'put', type:'fill'},
      {q:'She ___ (teach) English for 10 years.', a:'taught', type:'fill'},
      {q:'They ___ (not/want) to leave.', a:"didn't want", type:'fill'},
      {q:'He ___ (get) home at midnight.', a:'got', type:'fill'},
      {q:'___ she ___ (choose) the red one?', a:'Did...choose', type:'fill'},
      {q:'I ___ (begin) learning English last year.', a:'began', type:'fill'},
      {q:'We ___ (stand) in line for an hour.', a:'stood', type:'fill'},
      {q:'He ___ his homework before dinner.', options:['do','did','does','done'], a:1, type:'mc'},
      {q:'She ___ (send) the email yesterday.', a:'sent', type:'fill'},
      {q:'I ___ (not/drink) coffee this morning.', a:"didn't drink", type:'fill'},
      {q:'___ they ___ (grow) vegetables in the garden?', a:'Did...grow', type:'fill'},
      {q:'He ___ (cut) his finger while cooking.', a:'cut', type:'fill'},
      {q:'We ___ (swim) in the ocean last weekend.', a:'swam', type:'fill'},
      {q:'She ___ (fall) asleep during the movie.', a:'fell', type:'fill'},
      {q:'___ you ___ (keep) the receipt?', a:'Did...keep', type:'fill'},
      {q:'I ___ (say) goodbye to everyone.', a:'said', type:'fill'},
      {q:'He ___ (not/bring) his laptop.', a:"didn't bring", type:'fill'},
    ]
  },
};

// Render exercises
function renderExercises() {
  const el = document.getElementById('exerciseContent');
  if (!el) return;

  let html = '<div class="ex-tense-tabs">';
  Object.keys(GRAMMAR_EXERCISES).forEach((tense, i) => {
    html += '<button class="ex-tab ' + (i === 0 ? 'ex-tab-active' : '') + '" onclick="showExercises(\'' + tense + '\', this)">' + tense + '</button>';
  });
  html += '</div><div id="exQuestions"></div>';
  el.innerHTML = html;
  showExercises(Object.keys(GRAMMAR_EXERCISES)[0]);
}

let exState = { tense: '', current: 0, score: 0, total: 0, questions: [], answered: false };

function showExercises(tense, btn) {
  if (btn) {
    document.querySelectorAll('.ex-tab').forEach(t => t.classList.remove('ex-tab-active'));
    btn.classList.add('ex-tab-active');
  }
  const data = GRAMMAR_EXERCISES[tense];
  exState.tense = tense;
  exState.questions = [...data.questions].sort(() => Math.random() - 0.5);
  exState.current = 0;
  exState.score = 0;
  exState.total = Math.min(20, exState.questions.length);
  exState.answered = false;
  renderExQuestion();
}

function renderExQuestion() {
  const el = document.getElementById('exQuestions');
  if (exState.current >= exState.total) {
    const pct = Math.round(exState.score / exState.total * 100);
    el.innerHTML = '<div class="ex-result"><div class="ex-score">' + exState.score + '/' + exState.total + ' (' + pct + '%)</div>' +
      '<div class="ex-msg">' + (pct >= 80 ? 'Excellent!' : pct >= 60 ? 'Good! Keep practicing.' : 'Review the rules and try again.') + '</div>' +
      '<button class="btn btn-primary" onclick="showExercises(\'' + exState.tense + '\')">Try Again</button></div>';
    return;
  }

  const q = exState.questions[exState.current];
  exState.answered = false;

  let html = '<div class="ex-header"><span>' + exState.tense + '</span><span>Q' + (exState.current + 1) + '/' + exState.total + ' | Score: ' + exState.score + '</span></div>';
  html += '<div class="ex-question">' + q.q + '</div>';

  if (q.type === 'mc') {
    html += '<div class="ex-options">';
    q.options.forEach((opt, i) => {
      html += '<button class="ex-opt" onclick="checkExAnswer(' + i + ',' + q.a + ')">' + opt + '</button>';
    });
    html += '</div>';
  } else {
    html += '<div class="ex-fill"><input type="text" id="exInput" class="ex-input" placeholder="Type your answer..." onkeydown="if(event.key===\'Enter\')checkExFill()"><button class="btn btn-primary btn-sm" onclick="checkExFill()">Check</button></div>';
  }
  html += '<div id="exFeedback"></div>';
  el.innerHTML = html;
  const inp = document.getElementById('exInput');
  if (inp) inp.focus();
}

function checkExAnswer(chosen, correct) {
  if (exState.answered) return;
  exState.answered = true;
  const isCorrect = chosen === correct;
  if (isCorrect) exState.score++;
  const opts = document.querySelectorAll('.ex-opt');
  opts[chosen].classList.add(isCorrect ? 'ex-correct' : 'ex-wrong');
  if (!isCorrect) opts[correct].classList.add('ex-correct');
  document.getElementById('exFeedback').innerHTML = '<div class="ex-fb ' + (isCorrect ? 'ex-fb-ok' : 'ex-fb-no') + '">' + (isCorrect ? 'Correct!' : 'Wrong — correct answer: ' + exState.questions[exState.current].options[correct]) + '</div>';
  setTimeout(() => { exState.current++; renderExQuestion(); }, isCorrect ? 800 : 2000);
}

function checkExFill() {
  if (exState.answered) return;
  exState.answered = true;
  const input = document.getElementById('exInput');
  const answer = input.value.trim().toLowerCase();
  const correct = exState.questions[exState.current].a.toLowerCase();
  const isCorrect = answer === correct || answer === correct.replace('...', ' ');
  if (isCorrect) exState.score++;
  input.style.borderColor = isCorrect ? 'var(--success)' : '#ef4444';
  input.style.background = isCorrect ? '#dcfce7' : '#fee2e2';
  document.getElementById('exFeedback').innerHTML = '<div class="ex-fb ' + (isCorrect ? 'ex-fb-ok' : 'ex-fb-no') + '">' + (isCorrect ? 'Correct!' : 'Correct answer: <strong>' + exState.questions[exState.current].a + '</strong>') + '</div>';
  setTimeout(() => { exState.current++; renderExQuestion(); }, isCorrect ? 800 : 2500);
}
