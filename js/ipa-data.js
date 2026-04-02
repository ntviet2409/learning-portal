// ===== IPA DATA =====
const ipaData = {
shortVowels: [
  {s:"/ɪ/",w:"ship",d:"Short, relaxed 'i'; tongue slightly lower than 'ee'",vn:"Gần giống 'i' ngắn trong 'đi'"},
  {s:"/e/",w:"bed",d:"Tongue mid-front; mouth slightly open",vn:"Giống 'e' trong 'xe'"},
  {s:"/ae/",w:"cat",d:"Mouth wide open; tongue low and front",vn:"Giữa 'a' và 'e'; không có trong tiếng Việt"},
  {s:"/ʌ/",w:"cup",d:"Short, central vowel; mouth slightly open",vn:"Gần giống 'ơ' ngắn trong 'bơ'"},
  {s:"/ɒ/",w:"hot",d:"Rounded lips; tongue low and back (British)",vn:"Giống 'o' trong 'bò'"},
  {s:"/ʊ/",w:"book",d:"Short, relaxed 'oo'; lips slightly rounded",vn:"Gần giống 'u' ngắn trong 'tu'"},
  {s:"/ə/",w:"about",d:"The 'schwa'; neutral, unstressed sound",vn:"Giống 'ơ' nhẹ, không nhấn; rất phổ biến"},
],
longVowels: [
  {s:"/iː/",w:"sheep",d:"Long 'ee'; tongue high and front, lips spread",vn:"Giống 'i' dài trong 'đi' nhưng kéo dài hơn"},
  {s:"/ɑː/",w:"car",d:"Long 'ah'; mouth wide open, tongue low and back",vn:"Giống 'a' dài trong 'ba'"},
  {s:"/ɔː/",w:"door",d:"Long 'aw'; lips rounded, tongue mid-back",vn:"Giống 'o' dài trong 'bò' nhưng kéo dài"},
  {s:"/uː/",w:"blue",d:"Long 'oo'; lips tightly rounded, tongue high and back",vn:"Giống 'u' dài trong 'mù'"},
  {s:"/ɜː/",w:"bird",d:"Long central vowel; tongue mid-central, lips neutral",vn:"Giống 'ơ' dài; không có chính xác trong tiếng Việt"},
],
diphthongs: [
  {s:"/eɪ/",w:"face",d:"Glides from 'e' to 'i'; as in 'day'",vn:"Giống 'ây' trong 'cây'"},
  {s:"/aɪ/",w:"price",d:"Glides from open 'a' to 'i'; as in 'my'",vn:"Giống 'ai' trong 'hai'"},
  {s:"/ɔɪ/",w:"choice",d:"Glides from 'aw' to 'i'; as in 'boy'",vn:"Giống 'oi' trong 'bồi'"},
  {s:"/aʊ/",w:"mouth",d:"Glides from open 'a' to 'oo'; as in 'cow'",vn:"Giống 'ao' trong 'cao'"},
  {s:"/əʊ/",w:"goat",d:"Glides from schwa to 'oo'; as in 'no'",vn:"Giống 'âu' trong 'câu'"},
  {s:"/ɪə/",w:"near",d:"Glides from 'i' to schwa; as in 'here'",vn:"Giống 'ia' trong 'mía'"},
  {s:"/eə/",w:"square",d:"Glides from 'e' to schwa; as in 'air'",vn:"Gần giống 'e-ơ'; không có trong tiếng Việt"},
  {s:"/ʊə/",w:"cure",d:"Glides from 'oo' to schwa; as in 'tour'",vn:"Gần giống 'ua' trong 'mua'"},
],
voicelessCons: [
  {s:"/p/",w:"pen",d:"Lips together, released with a puff of air",vn:"Giống 'p' trong 'pin'; bật hơi mạnh hơn"},
  {s:"/t/",w:"ten",d:"Tongue tip touches ridge behind upper teeth",vn:"Giống 't' trong 'tin'; đầu lưỡi chạm lợi"},
  {s:"/k/",w:"cat",d:"Back of tongue touches soft palate",vn:"Giống 'c/k' trong 'cá'"},
  {s:"/f/",w:"fan",d:"Upper teeth touch lower lip; air flows through",vn:"Giống 'ph' trong 'phố'"},
  {s:"/θ/",w:"think",d:"Tongue tip between teeth; air flows over tongue",vn:"Đặt lưỡi giữa hai hàm răng; không có trong tiếng Việt"},
  {s:"/s/",w:"see",d:"Tongue near ridge; hissing air through narrow gap",vn:"Giống 's' trong 'sáu'"},
  {s:"/ʃ/",w:"she",d:"Tongue raised, lips slightly rounded; 'sh' sound",vn:"Gần giống 'x' trong 'xin' nhưng tròn môi hơn"},
  {s:"/tʃ/",w:"church",d:"Starts like /t/ then releases to /ʃ/; 'ch' sound",vn:"Giống 'ch' trong 'chào'"},
  {s:"/h/",w:"hat",d:"Glottis open; gentle breath of air",vn:"Giống 'h' trong 'hoa'"},
],
voicedCons: [
  {s:"/b/",w:"bag",d:"Like /p/ but vocal cords vibrate",vn:"Giống 'b' trong 'ba'"},
  {s:"/d/",w:"dog",d:"Like /t/ but vocal cords vibrate",vn:"Giống 'đ' trong 'đi'"},
  {s:"/ɡ/",w:"go",d:"Like /k/ but vocal cords vibrate",vn:"Giống 'g' trong 'gà'"},
  {s:"/v/",w:"van",d:"Like /f/ but vocal cords vibrate",vn:"Giống 'v' trong 'và'"},
  {s:"/ð/",w:"this",d:"Like /θ/ but vocal cords vibrate",vn:"Giống /θ/ nhưng rung dây thanh; không có trong tiếng Việt"},
  {s:"/z/",w:"zoo",d:"Like /s/ but vocal cords vibrate",vn:"Giống 'd/gi' trong 'da/gia' (miền Bắc)"},
  {s:"/ʒ/",w:"vision",d:"Like /ʃ/ but vocal cords vibrate",vn:"Gần giống 'gi' nhưng tròn môi; hiếm trong tiếng Việt"},
  {s:"/dʒ/",w:"judge",d:"Like /tʃ/ but vocal cords vibrate; 'j' sound",vn:"Gần giống 'tr' trong 'trời' (miền Nam)"},
],
nasals: [
  {s:"/m/",w:"man",d:"Lips closed; air flows through nose",vn:"Giống 'm' trong 'mẹ'"},
  {s:"/n/",w:"no",d:"Tongue tip on ridge; air flows through nose",vn:"Giống 'n' trong 'nó'"},
  {s:"/ŋ/",w:"sing",d:"Back of tongue on soft palate; air through nose",vn:"Giống 'ng' trong 'ngày'"},
  {s:"/l/",w:"leg",d:"Tongue tip on ridge; air flows around sides",vn:"Giống 'l' trong 'là'"},
  {s:"/r/",w:"red",d:"Tongue curled back, not touching roof of mouth",vn:"Uốn lưỡi; khác 'r' tiếng Việt"},
  {s:"/w/",w:"wet",d:"Lips rounded; glide to the next vowel",vn:"Giống 'qu' trong 'qua' (phần 'u')"},
  {s:"/j/",w:"yes",d:"Tongue high and front; glide to next vowel",vn:"Giống 'y/d' trong 'yêu/diêu'"},
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

function speak(text, rate=0.8) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = rate;
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en'));
    if (enVoice) u.voice = enVoice;
    window.speechSynthesis.speak(u);
  }
}
if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

function renderIPA(){
  const render=(id,arr)=>{
    document.getElementById(id).innerHTML=arr.map(x=>
      `<div class="ipa-card" onclick="speak('${x.w}', 0.7)"><div class="ipa-symbol">${x.s}</div><div class="ipa-word">${x.w} <button class="speak-btn" title="Listen" onclick="event.stopPropagation();speak('${x.w}', 0.7)">&#128264;</button></div><div class="ipa-desc">${x.d}</div>${x.vn?`<div class="ipa-vn">🇻🇳 ${x.vn}</div>`:''}</div>`
    ).join('');
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
}

