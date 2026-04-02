// ===== GRAMMAR DATA =====
const grammarData = [
  {title:"Present Simple",content:`
<h4>Formula</h4>
<div class="formula-box">Subject + base verb (+ s/es for he/she/it)<br>Negative: Subject + do/does + not + base verb<br>Question: Do/Does + subject + base verb?</div>
<div class="tense-timeline">
<svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="40" x2="370" y2="40" class="timeline-line"/>
<line x1="200" y1="15" x2="200" y2="65" class="timeline-now"/>
<text x="200" y="75" text-anchor="middle" class="timeline-label">NOW</text>
<text x="60" y="30" class="timeline-label">Past</text>
<text x="320" y="30" class="timeline-label">Future</text>
<circle cx="100" cy="40" r="5" class="timeline-action"/>
<circle cx="150" cy="40" r="5" class="timeline-action"/>
<circle cx="200" cy="40" r="5" class="timeline-action"/>
<circle cx="250" cy="40" r="5" class="timeline-action"/>
<circle cx="300" cy="40" r="5" class="timeline-action"/>
<text x="200" y="12" text-anchor="middle" font-size="11" font-weight="bold" fill="#10b981">Repeated action &#x2192; &#x2192; &#x2192;</text>
</svg>
</div>
<div class="vietnamese-box">
<div class="vn-title">&#127483;&#127475; Gi&#7843;i th&#237;ch ti&#7871;ng Vi&#7879;t</div>
<p><strong>Th&#236; hi&#7879;n t&#7841;i &#273;&#417;n</strong> d&#249;ng &#273;&#7875; di&#7877;n t&#7843; th&#243;i quen, s&#7921; th&#7853;t hi&#7875;n nhi&#234;n, v&#224; t&#236;nh hu&#7889;ng l&#226;u d&#224;i.</p>
<p>T&#432;&#417;ng &#273;&#432;&#417;ng trong ti&#7871;ng Vi&#7879;t: c&#225;c c&#226;u nh&#432; "T&#244;i <strong>l&#224;m vi&#7879;c</strong> m&#7895;i ng&#224;y", "N&#432;&#7899;c <strong>s&#244;i</strong> &#7903; 100 &#273;&#7897;".</p>
<p><em>L&#432;u &#253;: Th&#234;m "s/es" cho ch&#7911; ng&#7919; he/she/it &mdash; &#273;i&#7873;u n&#224;y kh&#244;ng c&#243; trong ti&#7871;ng Vi&#7879;t!</em></p>
</div>
<div class="tip-box">
<div class="tip-title">&#128161; Beginner Tip</div>
<p>Signal words: <strong>always, usually, often, sometimes, never, every day/week/month</strong>. If you see these words, use Present Simple!</p>
</div>
<h4>When to Use</h4>
<p>For habits, routines, general truths, and permanent situations.</p>
<h4>Examples</h4>
<ul class="example-list">
<li>I <strong>work</strong> from Monday to Friday.</li>
<li>She <strong>speaks</strong> three languages.</li>
<li>Water <strong>boils</strong> at 100 degrees Celsius.</li>
<li>They <strong>don't live</strong> in London.</li>
</ul>
<h4>Common Mistakes</h4>
<div class="mistake-box">
<span class="incorrect">He work every day.</span> &rarr; <span class="correct">He works every day.</span><br>
<span class="incorrect">She don't like coffee.</span> &rarr; <span class="correct">She doesn't like coffee.</span>
</div>`},
  {title:"Present Continuous",content:`
<h4>Formula</h4>
<div class="formula-box">Subject + am/is/are + verb-ing<br>Negative: Subject + am/is/are + not + verb-ing<br>Question: Am/Is/Are + subject + verb-ing?</div>
<div class="tense-timeline">
<svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="40" x2="370" y2="40" class="timeline-line"/>
<line x1="200" y1="15" x2="200" y2="65" class="timeline-now"/>
<text x="200" y="75" text-anchor="middle" class="timeline-label">NOW</text>
<rect x="160" y="30" width="80" height="20" rx="10" class="timeline-range"/>
<text x="200" y="44" text-anchor="middle" font-size="10" font-weight="bold" fill="#0891b2">happening</text>
<path d="M 160 40 Q 180 25, 200 40 Q 220 55, 240 40" stroke="#10b981" stroke-width="2.5" fill="none"/>
</svg>
</div>
<div class="vietnamese-box">
<div class="vn-title">&#127483;&#127475; Gi&#7843;i th&#237;ch ti&#7871;ng Vi&#7879;t</div>
<p><strong>Th&#236; hi&#7879;n t&#7841;i ti&#7871;p di&#7877;n</strong> d&#249;ng cho h&#224;nh &#273;&#7897;ng &#273;ang x&#7843;y ra ngay l&#250;c n&#224;y ho&#7863;c t&#7841;m th&#7901;i.</p>
<p>T&#432;&#417;ng &#273;&#432;&#417;ng: "T&#244;i <strong>&#273;ang h&#7885;c</strong> ti&#7871;ng Anh" &mdash; t&#7915; "&#273;ang" trong ti&#7871;ng Vi&#7879;t ch&#237;nh l&#224; d&#7845;u hi&#7879;u c&#7911;a th&#236; n&#224;y.</p>
<p><em>L&#432;u &#253;: M&#7897;t s&#7889; &#273;&#7897;ng t&#7915; (know, like, want) kh&#244;ng d&#249;ng th&#236; ti&#7871;p di&#7877;n &#273;&#432;&#7907;c!</em></p>
</div>
<div class="tip-box">
<div class="tip-title">&#128161; Beginner Tip</div>
<p>Signal words: <strong>now, right now, at the moment, currently, today, this week</strong>. Think of the Vietnamese word "&#273;ang"!</p>
</div>
<h4>When to Use</h4>
<p>For actions happening now, temporary situations, and future arrangements.</p>
<h4>Examples</h4>
<ul class="example-list">
<li>I <strong>am studying</strong> English right now.</li>
<li>She <strong>is working</strong> from home today.</li>
<li>They <strong>are planning</strong> a trip for next month.</li>
<li>He <strong>isn't watching</strong> TV at the moment.</li>
</ul>
<h4>Common Mistakes</h4>
<div class="mistake-box">
<span class="incorrect">I am know the answer.</span> &rarr; <span class="correct">I know the answer.</span> (Know is a state verb; don't use continuous.)<br>
<span class="incorrect">She is work now.</span> &rarr; <span class="correct">She is working now.</span>
</div>`},
  {title:"Past Simple",content:`
<h4>Formula</h4>
<div class="formula-box">Subject + past form of verb (verb-ed or irregular)<br>Negative: Subject + did not + base verb<br>Question: Did + subject + base verb?</div>
<div class="tense-timeline">
<svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="40" x2="370" y2="40" class="timeline-line"/>
<line x1="280" y1="15" x2="280" y2="65" class="timeline-now"/>
<text x="280" y="75" text-anchor="middle" class="timeline-label">NOW</text>
<circle cx="120" cy="40" r="7" class="timeline-action"/>
<text x="120" y="28" text-anchor="middle" font-size="10" fill="#10b981" font-weight="bold">&#10003; done</text>
<text x="120" y="60" text-anchor="middle" class="timeline-label">yesterday</text>
</svg>
</div>
<div class="vietnamese-box">
<div class="vn-title">&#127483;&#127475; Gi&#7843;i th&#237;ch ti&#7871;ng Vi&#7879;t</div>
<p><strong>Th&#236; qu&#225; kh&#7913; &#273;&#417;n</strong> d&#249;ng cho h&#224;nh &#273;&#7897;ng &#273;&#227; ho&#224;n th&#224;nh trong qu&#225; kh&#7913;.</p>
<p>T&#432;&#417;ng &#273;&#432;&#417;ng: "T&#244;i <strong>&#273;&#227; &#273;i</strong> Paris h&#232; tr&#432;&#7899;c" &mdash; t&#7915; "&#273;&#227;" trong ti&#7871;ng Vi&#7879;t.</p>
<p><em>L&#432;u &#253;: &#272;&#7897;ng t&#7915; b&#7845;t quy t&#7855;c (go&#8594;went, see&#8594;saw) c&#7847;n h&#7885;c thu&#7897;c!</em></p>
</div>
<div class="tip-box">
<div class="tip-title">&#128161; Beginner Tip</div>
<p>Signal words: <strong>yesterday, last week/month/year, ago, in 2020</strong>. A specific time in the past = Past Simple!</p>
</div>
<h4>When to Use</h4>
<p>For completed actions in the past at a specific time.</p>
<h4>Examples</h4>
<ul class="example-list">
<li>I <strong>visited</strong> Paris last summer.</li>
<li>She <strong>went</strong> to the store yesterday.</li>
<li>They <strong>didn't see</strong> the movie.</li>
<li><strong>Did</strong> you <strong>finish</strong> the homework?</li>
</ul>
<h4>Common Mistakes</h4>
<div class="mistake-box">
<span class="incorrect">I goed to school.</span> &rarr; <span class="correct">I went to school.</span><br>
<span class="incorrect">Did she went home?</span> &rarr; <span class="correct">Did she go home?</span>
</div>`},
  {title:"Past Continuous",content:`
<h4>Formula</h4>
<div class="formula-box">Subject + was/were + verb-ing<br>Negative: Subject + was/were + not + verb-ing<br>Question: Was/Were + subject + verb-ing?</div>
<div class="tense-timeline">
<svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="40" x2="370" y2="40" class="timeline-line"/>
<line x1="300" y1="15" x2="300" y2="65" class="timeline-now"/>
<text x="300" y="75" text-anchor="middle" class="timeline-label">NOW</text>
<rect x="80" y="30" width="120" height="20" rx="10" class="timeline-range"/>
<path d="M 80 40 Q 110 25, 140 40 Q 170 55, 200 40" stroke="#10b981" stroke-width="2.5" fill="none"/>
<line x1="160" y1="25" x2="160" y2="55" stroke="#ef4444" stroke-width="2"/>
<circle cx="160" cy="40" r="5" fill="#ef4444"/>
<text x="160" y="18" text-anchor="middle" font-size="9" fill="#ef4444" font-weight="bold">interrupted!</text>
<text x="140" y="60" text-anchor="middle" class="timeline-label">past</text>
</svg>
</div>
<div class="vietnamese-box">
<div class="vn-title">&#127483;&#127475; Gi&#7843;i th&#237;ch ti&#7871;ng Vi&#7879;t</div>
<p><strong>Th&#236; qu&#225; kh&#7913; ti&#7871;p di&#7877;n</strong> d&#249;ng cho h&#224;nh &#273;&#7897;ng &#273;ang x&#7843;y ra trong qu&#225; kh&#7913; (th&#432;&#7901;ng b&#7883; ng&#7855;t b&#7903;i h&#224;nh &#273;&#7897;ng kh&#225;c).</p>
<p>T&#432;&#417;ng &#273;&#432;&#417;ng: "T&#244;i <strong>&#273;ang &#273;&#7885;c</strong> s&#225;ch th&#236; &#273;i&#7879;n tho&#7841;i reo" &mdash; k&#7871;t h&#7907;p "&#273;ang" v&#7899;i "th&#236;" trong ti&#7871;ng Vi&#7879;t.</p>
</div>
<div class="tip-box">
<div class="tip-title">&#128161; Beginner Tip</div>
<p>Signal words: <strong>while, when, at that time, at 8 PM yesterday</strong>. Often paired with Past Simple: "I was cooking <em>when</em> he arrived."</p>
</div>
<h4>When to Use</h4>
<p>For ongoing actions in the past, often interrupted by another event.</p>
<h4>Examples</h4>
<ul class="example-list">
<li>I <strong>was reading</strong> when the phone rang.</li>
<li>They <strong>were playing</strong> football at 3 PM.</li>
<li>She <strong>wasn't listening</strong> to the lecture.</li>
<li>What <strong>were</strong> you <strong>doing</strong> at eight last night?</li>
</ul>
<h4>Common Mistakes</h4>
<div class="mistake-box">
<span class="incorrect">I was watch TV.</span> &rarr; <span class="correct">I was watching TV.</span><br>
<span class="incorrect">When I was arriving, it rained.</span> &rarr; <span class="correct">When I arrived, it was raining.</span>
</div>`},
  {title:"Future Simple (will)",content:`
<h4>Formula</h4>
<div class="formula-box">Subject + will + base verb<br>Negative: Subject + will not (won't) + base verb<br>Question: Will + subject + base verb?</div>
<div class="tense-timeline">
<svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="40" x2="370" y2="40" class="timeline-line"/>
<line x1="150" y1="15" x2="150" y2="65" class="timeline-now"/>
<text x="150" y="75" text-anchor="middle" class="timeline-label">NOW</text>
<circle cx="280" cy="40" r="7" class="timeline-marker"/>
<text x="280" y="28" text-anchor="middle" font-size="10" fill="#0891b2" font-weight="bold">will happen</text>
<path d="M 155 38 L 270 38" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="6" marker-end="url(#arrow)"/>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#0891b2"/></marker></defs>
</svg>
</div>
<div class="vietnamese-box">
<div class="vn-title">&#127483;&#127475; Gi&#7843;i th&#237;ch ti&#7871;ng Vi&#7879;t</div>
<p><strong>T&#432;&#417;ng lai &#273;&#417;n (will)</strong> d&#249;ng cho quy&#7871;t &#273;&#7883;nh t&#7913;c th&#7901;i, l&#7901;i h&#7913;a, d&#7921; &#273;o&#225;n.</p>
<p>T&#432;&#417;ng &#273;&#432;&#417;ng: "T&#244;i <strong>s&#7869;</strong> gi&#250;p b&#7841;n" &mdash; t&#7915; "s&#7869;" trong ti&#7871;ng Vi&#7879;t.</p>
<p><em>Kh&#225;c v&#7899;i "going to": "will" th&#432;&#7901;ng cho quy&#7871;t &#273;&#7883;nh ngay l&#250;c n&#243;i, "going to" cho k&#7871; ho&#7841;ch &#273;&#227; c&#243; t&#7915; tr&#432;&#7899;c.</em></p>
</div>
<div class="tip-box">
<div class="tip-title">&#128161; Beginner Tip</div>
<p>Signal words: <strong>tomorrow, next week, I think, probably, I promise</strong>. Spontaneous decision? Use "will"!</p>
</div>
<h4>When to Use</h4>
<p>For spontaneous decisions, predictions, promises, and offers.</p>
<h4>Examples</h4>
<ul class="example-list">
<li>I <strong>will help</strong> you with that.</li>
<li>It <strong>will rain</strong> tomorrow.</li>
<li>She <strong>won't come</strong> to the party.</li>
<li><strong>Will</strong> you <strong>be</strong> at the meeting?</li>
</ul>
<h4>Common Mistakes</h4>
<div class="mistake-box">
<span class="incorrect">I will going there.</span> &rarr; <span class="correct">I will go there.</span><br>
<span class="incorrect">She will helps us.</span> &rarr; <span class="correct">She will help us.</span>
</div>`},
  {title:"Future with 'going to'",content:`
<h4>Formula</h4>
<div class="formula-box">Subject + am/is/are + going to + base verb<br>Negative: Subject + am/is/are + not + going to + base verb<br>Question: Am/Is/Are + subject + going to + base verb?</div>
<div class="tense-timeline">
<svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="40" x2="370" y2="40" class="timeline-line"/>
<line x1="150" y1="15" x2="150" y2="65" class="timeline-now"/>
<text x="150" y="75" text-anchor="middle" class="timeline-label">NOW</text>
<rect x="100" y="32" width="40" height="16" rx="3" fill="#f59e0b" opacity="0.3"/>
<text x="120" y="43" text-anchor="middle" font-size="8" fill="#f59e0b" font-weight="bold">plan</text>
<circle cx="280" cy="40" r="7" class="timeline-action"/>
<path d="M 155 38 L 270 38" stroke="#10b981" stroke-width="2" marker-end="url(#arrow2)"/>
<defs><marker id="arrow2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/></marker></defs>
<text x="280" y="28" text-anchor="middle" font-size="10" fill="#10b981" font-weight="bold">planned action</text>
</svg>
</div>
<div class="vietnamese-box">
<div class="vn-title">&#127483;&#127475; Gi&#7843;i th&#237;ch ti&#7871;ng Vi&#7879;t</div>
<p><strong>T&#432;&#417;ng lai v&#7899;i "going to"</strong> d&#249;ng cho k&#7871; ho&#7841;ch &#273;&#227; c&#243; s&#7861;n v&#224; d&#7921; &#273;o&#225;n c&#243; b&#7857;ng ch&#7913;ng.</p>
<p>T&#432;&#417;ng &#273;&#432;&#417;ng: "T&#244;i <strong>s&#7855;p</strong> &#273;i du l&#7883;ch" ho&#7863;c "T&#244;i <strong>d&#7921; &#273;&#7883;nh s&#7869;</strong> h&#7885;c y" &mdash; &#273;&#227; l&#234;n k&#7871; ho&#7841;ch.</p>
<p><em>Nh&#236;n m&#226;y &#273;en k&#236;a! Tr&#7901;i <strong>s&#7855;p</strong> m&#432;a. = Look at those clouds! It <strong>is going to</strong> rain.</em></p>
</div>
<div class="tip-box">
<div class="tip-title">&#128161; Beginner Tip</div>
<p>Already decided before speaking? Use "going to". Just decided now? Use "will". Evidence you can see? Use "going to".</p>
</div>
<h4>When to Use</h4>
<p>For planned intentions and predictions based on evidence.</p>
<h4>Examples</h4>
<ul class="example-list">
<li>I <strong>am going to study</strong> medicine.</li>
<li>Look at those clouds! It <strong>is going to rain</strong>.</li>
<li>They <strong>are going to move</strong> to a new house.</li>
<li>She <strong>isn't going to accept</strong> the offer.</li>
</ul>
<h4>Common Mistakes</h4>
<div class="mistake-box">
<span class="incorrect">I going to travel.</span> &rarr; <span class="correct">I am going to travel.</span><br>
<span class="incorrect">He is going to goes.</span> &rarr; <span class="correct">He is going to go.</span>
</div>`},
  {title:"Present Perfect",content:`
<h4>Formula</h4>
<div class="formula-box">Subject + have/has + past participle<br>Negative: Subject + have/has + not + past participle<br>Question: Have/Has + subject + past participle?</div>
<div class="tense-timeline">
<svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="40" x2="370" y2="40" class="timeline-line"/>
<line x1="250" y1="15" x2="250" y2="65" class="timeline-now"/>
<text x="250" y="75" text-anchor="middle" class="timeline-label">NOW</text>
<circle cx="120" cy="40" r="5" class="timeline-action"/>
<path d="M 125 38 L 245 38" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4"/>
<text x="180" y="30" text-anchor="middle" font-size="9" fill="#10b981" font-weight="bold">still relevant now</text>
<circle cx="250" cy="40" r="8" stroke="#0891b2" stroke-width="2" fill="none"/>
</svg>
</div>
<div class="vietnamese-box">
<div class="vn-title">&#127483;&#127475; Gi&#7843;i th&#237;ch ti&#7871;ng Vi&#7879;t</div>
<p><strong>Th&#236; hi&#7879;n t&#7841;i ho&#224;n th&#224;nh</strong> d&#249;ng cho h&#224;nh &#273;&#7897;ng &#273;&#227; x&#7843;y ra nh&#432;ng c&#242;n li&#234;n quan &#273;&#7871;n hi&#7879;n t&#7841;i.</p>
<p>T&#432;&#417;ng &#273;&#432;&#417;ng: "T&#244;i <strong>&#273;&#227; t&#7915;ng</strong> &#273;i Nh&#7853;t" (kinh nghi&#7879;m), "C&#244; &#7845;y <strong>&#273;&#227;</strong> l&#224;m xong b&#224;i" (v&#7915;a xong, k&#7871;t qu&#7843; c&#242;n &#273;&#243;).</p>
<p><em>Kh&#225;c Past Simple: kh&#244;ng d&#249;ng v&#7899;i th&#7901;i gian c&#7909; th&#7875; (yesterday, last year)!</em></p>
</div>
<div class="tip-box">
<div class="tip-title">&#128161; Beginner Tip</div>
<p>Signal words: <strong>ever, never, already, yet, just, since, for, recently</strong>. No specific past time = Present Perfect!</p>
</div>
<h4>When to Use</h4>
<p>For experiences, recent actions with present relevance, and unfinished time periods.</p>
<h4>Examples</h4>
<ul class="example-list">
<li>I <strong>have visited</strong> Japan twice.</li>
<li>She <strong>has finished</strong> her homework.</li>
<li>They <strong>haven't seen</strong> the movie yet.</li>
<li><strong>Have</strong> you ever <strong>eaten</strong> sushi?</li>
</ul>
<h4>Common Mistakes</h4>
<div class="mistake-box">
<span class="incorrect">I have visited Paris yesterday.</span> &rarr; <span class="correct">I visited Paris yesterday.</span> (Use past simple with specific past time.)<br>
<span class="incorrect">She has went home.</span> &rarr; <span class="correct">She has gone home.</span>
</div>`},
  {title:"Past Perfect",content:`
<h4>Formula</h4>
<div class="formula-box">Subject + had + past participle<br>Negative: Subject + had + not + past participle<br>Question: Had + subject + past participle?</div>
<div class="tense-timeline">
<svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="40" x2="370" y2="40" class="timeline-line"/>
<line x1="300" y1="15" x2="300" y2="65" class="timeline-now"/>
<text x="300" y="75" text-anchor="middle" class="timeline-label">NOW</text>
<circle cx="100" cy="40" r="7" class="timeline-action"/>
<text x="100" y="28" text-anchor="middle" font-size="9" fill="#10b981" font-weight="bold">1st action</text>
<circle cx="200" cy="40" r="7" class="timeline-marker"/>
<text x="200" y="28" text-anchor="middle" font-size="9" fill="#0891b2" font-weight="bold">2nd action</text>
<text x="100" y="60" text-anchor="middle" class="timeline-label">had + V3</text>
<text x="200" y="60" text-anchor="middle" class="timeline-label">past simple</text>
</svg>
</div>
<div class="vietnamese-box">
<div class="vn-title">&#127483;&#127475; Gi&#7843;i th&#237;ch ti&#7871;ng Vi&#7879;t</div>
<p><strong>Th&#236; qu&#225; kh&#7913; ho&#224;n th&#224;nh</strong> d&#249;ng khi m&#7897;t h&#224;nh &#273;&#7897;ng x&#7843;y ra <strong>tr&#432;&#7899;c</strong> m&#7897;t h&#224;nh &#273;&#7897;ng kh&#225;c trong qu&#225; kh&#7913;.</p>
<p>T&#432;&#417;ng &#273;&#432;&#417;ng: "T&#244;i <strong>&#273;&#227; &#259;n xong</strong> tr&#432;&#7899;c khi c&#244; &#7845;y &#273;&#7871;n" &mdash; nh&#7845;n m&#7841;nh h&#224;nh &#273;&#7897;ng n&#224;o x&#7843;y ra tr&#432;&#7899;c.</p>
</div>
<div class="tip-box">
<div class="tip-title">&#128161; Beginner Tip</div>
<p>Signal words: <strong>before, after, by the time, already, when, until</strong>. Two past events? The earlier one uses Past Perfect.</p>
</div>
<h4>When to Use</h4>
<p>For an action completed before another past action.</p>
<h4>Examples</h4>
<ul class="example-list">
<li>I <strong>had finished</strong> dinner before she arrived.</li>
<li>They <strong>had left</strong> when we got there.</li>
<li>She <strong>hadn't studied</strong> before the test.</li>
<li><strong>Had</strong> you <strong>met</strong> him before the party?</li>
</ul>
<h4>Common Mistakes</h4>
<div class="mistake-box">
<span class="incorrect">I had went to the store.</span> &rarr; <span class="correct">I had gone to the store.</span><br>
<span class="incorrect">After I had ate, I left.</span> &rarr; <span class="correct">After I had eaten, I left.</span>
</div>`},
  {title:"Present Perfect Continuous",content:`
<h4>Formula</h4>
<div class="formula-box">Subject + have/has + been + verb-ing<br>Negative: Subject + have/has + not + been + verb-ing<br>Question: Have/Has + subject + been + verb-ing?</div>
<div class="tense-timeline">
<svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="40" x2="370" y2="40" class="timeline-line"/>
<line x1="280" y1="15" x2="280" y2="65" class="timeline-now"/>
<text x="280" y="75" text-anchor="middle" class="timeline-label">NOW</text>
<rect x="100" y="30" width="180" height="20" rx="10" class="timeline-range"/>
<path d="M 100 40 Q 140 25, 170 40 Q 200 55, 230 40 Q 260 25, 280 40" stroke="#10b981" stroke-width="2.5" fill="none"/>
<text x="190" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#0891b2">ongoing since past</text>
<text x="100" y="60" text-anchor="middle" class="timeline-label">started</text>
<path d="M 285 38 L 330 38" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4" marker-end="url(#arrow3)"/>
<defs><marker id="arrow3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/></marker></defs>
<text x="320" y="30" text-anchor="middle" font-size="8" fill="#10b981">may continue</text>
</svg>
</div>
<div class="vietnamese-box">
<div class="vn-title">&#127483;&#127475; Gi&#7843;i th&#237;ch ti&#7871;ng Vi&#7879;t</div>
<p><strong>Th&#236; hi&#7879;n t&#7841;i ho&#224;n th&#224;nh ti&#7871;p di&#7877;n</strong> nh&#7845;n m&#7841;nh <strong>th&#7901;i gian</strong> c&#7911;a h&#224;nh &#273;&#7897;ng b&#7855;t &#273;&#7847;u t&#7915; qu&#225; kh&#7913; v&#224; ti&#7871;p t&#7909;c &#273;&#7871;n hi&#7879;n t&#7841;i.</p>
<p>T&#432;&#417;ng &#273;&#432;&#417;ng: "T&#244;i <strong>&#273;&#227; h&#7885;c</strong> ti&#7871;ng Anh <strong>&#273;&#432;&#7907;c</strong> 2 n&#259;m (v&#224; v&#7851;n &#273;ang h&#7885;c)".</p>
<p><em>Kh&#225;c Present Perfect: th&#236; n&#224;y nh&#7845;n m&#7841;nh qu&#225; tr&#236;nh v&#224; th&#7901;i gian, Present Perfect nh&#7845;n m&#7841;nh k&#7871;t qu&#7843;.</em></p>
</div>
<div class="tip-box">
<div class="tip-title">&#128161; Beginner Tip</div>
<p>Signal words: <strong>for, since, how long, all day/morning, lately, recently</strong>. Focus on the duration, not the result!</p>
</div>
<h4>When to Use</h4>
<p>For actions that started in the past and continue to the present, emphasizing duration.</p>
<h4>Examples</h4>
<ul class="example-list">
<li>I <strong>have been studying</strong> English for two years.</li>
<li>She <strong>has been working</strong> here since 2020.</li>
<li>They <strong>haven't been sleeping</strong> well lately.</li>
<li>How long <strong>have</strong> you <strong>been waiting</strong>?</li>
</ul>
<h4>Common Mistakes</h4>
<div class="mistake-box">
<span class="incorrect">I have been know him for years.</span> &rarr; <span class="correct">I have known him for years.</span> (State verbs don't use continuous.)<br>
<span class="incorrect">She has been studied all day.</span> &rarr; <span class="correct">She has been studying all day.</span>
</div>`},
  {title:"Subject-Verb Agreement",content:`
<h4>Rules</h4>
<p>The verb must agree with the subject in number (singular/plural).</p>
<h4>Examples</h4>
<ul class="example-list">
<li>She <strong>is</strong> a doctor. / They <strong>are</strong> doctors.</li>
<li>The team <strong>works</strong> together. / The teams <strong>work</strong> independently.</li>
<li>Everyone <strong>has</strong> a ticket. (Indefinite pronouns are singular.)</li>
<li>The news <strong>is</strong> surprising. (Some nouns look plural but are singular.)</li>
</ul>
<h4>Common Mistakes</h4>
<div class="mistake-box">
<span class="incorrect">The children is playing.</span> &rarr; <span class="correct">The children are playing.</span><br>
<span class="incorrect">Everybody have a phone.</span> &rarr; <span class="correct">Everybody has a phone.</span>
</div>`},
  {title:"Articles (a / an / the)",content:`
<h4>Rules</h4>
<p><strong>a/an</strong> = indefinite article, used with singular countable nouns mentioned for the first time or in general.<br>
<strong>the</strong> = definite article, used when the noun is specific or already known.</p>
<p>Use <strong>a</strong> before consonant sounds, <strong>an</strong> before vowel sounds.</p>
<h4>Examples</h4>
<ul class="example-list">
<li>I saw <strong>a</strong> cat. <strong>The</strong> cat was black.</li>
<li>She is <strong>an</strong> engineer.</li>
<li><strong>The</strong> sun rises in the east. (Unique things.)</li>
<li>I need <strong>a</strong> new phone. (Non-specific.)</li>
</ul>
<h4>Common Mistakes</h4>
<div class="mistake-box">
<span class="incorrect">She is a honest person.</span> &rarr; <span class="correct">She is an honest person.</span> (Silent 'h'.)<br>
<span class="incorrect">I go to the school every day.</span> &rarr; <span class="correct">I go to school every day.</span> (No article for institutions used for their purpose.)
</div>`},
  {title:"Common Prepositions",content:`
<h4>Time Prepositions</h4>
<ul class="example-list">
<li><strong>at</strong> + specific time: at 5 o'clock, at night, at noon</li>
<li><strong>on</strong> + days/dates: on Monday, on July 4th, on my birthday</li>
<li><strong>in</strong> + months/years/seasons/long periods: in June, in 2024, in winter, in the morning</li>
</ul>
<h4>Place Prepositions</h4>
<ul class="example-list">
<li><strong>at</strong> + specific point: at the bus stop, at home, at the door</li>
<li><strong>on</strong> + surfaces: on the table, on the wall, on the second floor</li>
<li><strong>in</strong> + enclosed spaces: in the box, in the room, in the city</li>
</ul>
<h4>Movement Prepositions</h4>
<ul class="example-list">
<li><strong>to</strong>: I'm going <strong>to</strong> the store.</li>
<li><strong>from</strong>: She came <strong>from</strong> France.</li>
<li><strong>through</strong>: Walk <strong>through</strong> the park.</li>
<li><strong>across</strong>: Swim <strong>across</strong> the river.</li>
</ul>
<h4>Common Mistakes</h4>
<div class="mistake-box">
<span class="incorrect">I arrived to home.</span> &rarr; <span class="correct">I arrived home.</span> (No preposition with 'home'.)<br>
<span class="incorrect">She is good in math.</span> &rarr; <span class="correct">She is good at math.</span>
</div>`},
  {title:"Question Formation",content:`
<h4>Yes/No Questions</h4>
<div class="formula-box">Auxiliary verb + subject + main verb?<br>Do/Does/Did + subject + base verb?<br>Am/Is/Are + subject + verb-ing?</div>
<h4>Wh- Questions</h4>
<div class="formula-box">Wh- word + auxiliary + subject + main verb?<br>What, Where, When, Why, Who, How, Which</div>
<h4>Examples</h4>
<ul class="example-list">
<li><strong>Do</strong> you <strong>like</strong> pizza?</li>
<li><strong>Where</strong> does she <strong>live</strong>?</li>
<li><strong>What</strong> are you <strong>doing</strong>?</li>
<li><strong>Why</strong> did he <strong>leave</strong> early?</li>
</ul>
<h4>Common Mistakes</h4>
<div class="mistake-box">
<span class="incorrect">Where you live?</span> &rarr; <span class="correct">Where do you live?</span><br>
<span class="incorrect">What means this word?</span> &rarr; <span class="correct">What does this word mean?</span>
</div>`},
  {title:"Negative Sentences",content:`
<h4>How to Make Negatives</h4>
<div class="formula-box">Present Simple: Subject + do/does + not + base verb<br>Past Simple: Subject + did + not + base verb<br>With 'be': Subject + am/is/are/was/were + not<br>With modals: Subject + modal + not + base verb</div>
<h4>Examples</h4>
<ul class="example-list">
<li>I <strong>don't</strong> understand.</li>
<li>She <strong>doesn't</strong> work on Sundays.</li>
<li>They <strong>didn't</strong> come to the party.</li>
<li>He <strong>isn't</strong> at home right now.</li>
</ul>
<h4>Contractions</h4>
<ul class="example-list">
<li>do not = <strong>don't</strong></li>
<li>does not = <strong>doesn't</strong></li>
<li>did not = <strong>didn't</strong></li>
<li>is not = <strong>isn't</strong></li>
<li>are not = <strong>aren't</strong></li>
<li>will not = <strong>won't</strong></li>
<li>have not = <strong>haven't</strong></li>
</ul>
<h4>Common Mistakes</h4>
<div class="mistake-box">
<span class="incorrect">I not like it.</span> &rarr; <span class="correct">I don't like it.</span><br>
<span class="incorrect">She doesn't likes coffee.</span> &rarr; <span class="correct">She doesn't like coffee.</span>
</div>`}
];

