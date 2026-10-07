/**
     * HSK Audio Lab - Free & Unlimited Chinese TTS
     * 1. Google Translate TTS Engine: High-quality Standard Mandarin (zh-CN) & Taiwanese (zh-TW)
     * 2. Microsoft Edge & Browser Neural AI Voices: Zero latency, offline-capable, Xiaoxiao & Yunxi
     * 3. Smart Automatic Fallback: Guarantees zero interruptions
     * 4. Shadowing & Sequence Player: 1x/2x/3x repeats, adjustable interval & smooth auto-scroll
     * 5. Zero API Keys Required: 100% Free, no character quotas, no 402 Payment Required errors
     * 6. Google Gemini AI Assistant: Contextual Reading Comprehension, Quiz & Grammar Extraction
     */

    // --- SAMPLE LESSON DATA (HSK Standards) ---
    const SAMPLE_LESSONS = {
      bai7: `大卫：你好！你想吃什么？
马可：我想吃中国菜，中国菜很好吃。
大卫：你会做中国菜吗？
马可：我不会做，但是我很想学。
大卫：今天晚上我请客，我们去学校外面的中国饭馆吧！
马可：太好了，非常感谢你！`,

      bai8: `李朋：服务员，这件衣服多少钱？
服务员：这件衬衫两百块钱。
李朋：有点儿贵，能不能便宜一点儿？
服务员：如果你真心想买，一百八十块怎么样？
李朋：一百五十块行不行？行的话我就买两件。
服务员：好吧，今天给你算最便宜的价格！`,

      bai9: `王力：你在哪儿呢？我已经到首都国际机场了。
张敏：我刚下飞机，现在正在取行李呢。
王力：路上有点儿堵车，你别着急，慢慢走出来。
张敏：没关系，我已经看到出口的大门了。
王力：我在接机口拿着你的名字牌子，看到你了！
张敏：太高兴见到你了，在北京这几天要麻烦你了。`,

      bai10: `每个人都希望能有一个健康的身体。
要保持健康，除了每天锻炼身体以外，还要注意养成良好的饮食习惯。
现在很多人工作很忙，经常觉得没有时间运动，这样长期下去对身体很不好。
其实，饭后散步就是一种非常好的运动方式，既简单又有效。
每天坚持散步半小时，心情和精神状态也会变得更好。`
    };

    // --- SAMPLE LESSON CONTEXT TRANSLATIONS (HSK Standards) ---
    const SAMPLE_LESSON_TRANSLATIONS = {
      bai7: [
        "David: Chào cậu! Cậu muốn ăn món gì nào?",
        "Marco: Tớ muốn ăn món Trung Quốc, đồ ăn Trung ngon lắm.",
        "David: Cậu có biết nấu món Trung Quốc không?",
        "Marco: Tớ không biết nấu, nhưng tớ rất muốn học đấy.",
        "David: Tối nay tớ mời, chúng mình ra quán ăn Trung Quốc ngoài cổng trường nhé!",
        "Marco: Tuyệt quá, cảm ơn cậu nhiều nhé!"
      ],
      bai8: [
        "Lý Bằng: Bạn phục vụ ơi, chiếc áo này giá bao nhiêu tiền vậy?",
        "Nhân viên: Chiếc áo sơ mi này giá hai trăm tệ ạ.",
        "Lý Bằng: Hơi đắt một chút, có bớt thêm cho tôi được không?",
        "Nhân viên: Nếu anh thực lòng muốn mua thì một trăm tám mươi tệ thế nào ạ?",
        "Lý Bằng: Một trăm năm mươi tệ được không? Nếu được thì tôi lấy luôn hai chiếc.",
        "Nhân viên: Thôi được rồi, hôm nay em tính cho anh mức giá rẻ nhất luôn đấy nhé!"
      ],
      bai9: [
        "Vương Lực: Cậu đang ở đâu thế? Tớ đã đến sân bay quốc tế Thủ đô rồi này.",
        "Trương Mẫn: Tớ vừa xuống máy bay, giờ đang đứng lấy hành lý đây.",
        "Vương Lực: Trên đường hơi tắc một chút, cậu đừng vội, cứ từ từ đi ra nhé.",
        "Trương Mẫn: Không sao đâu, tớ đã nhìn thấy cửa ra rồi.",
        "Vương Lực: Tớ đang cầm biển tên của cậu đứng ở cửa đón này, thấy cậu rồi!",
        "Trương Mẫn: Mừng quá vì gặp lại cậu, mấy ngày ở Bắc Kinh đành phải làm phiền cậu rồi."
      ],
      bai10: [
        "Ai trong chúng ta cũng đều mong muốn sở hữu một cơ thể khỏe mạnh.",
        "Để giữ gìn sức khỏe, bên cạnh việc tập luyện mỗi ngày, chúng ta còn cần chú ý xây dựng thói quen ăn uống khoa học.",
        "Ngày nay nhiều người bận rộn với công việc, thường cảm thấy không có thời gian vận động, tình trạng này kéo dài sẽ rất có hại cho sức khỏe.",
        "Thực ra, đi dạo sau bữa ăn chính là một phương pháp rèn luyện rất tốt, vừa đơn giản lại vừa hiệu quả.",
        "Mỗi ngày kiên trì đi bộ nửa tiếng, tâm trạng và tinh thần của bạn cũng sẽ trở nên phấn chấn, thoải mái hơn."
      ]
    };

    // --- STATE MANAGEMENT ---
    const state = {
      engine: localStorage.getItem('hsk_tts_engine') || 'google_tts', // 'google_tts' or 'edge_speech'
      googleLang: localStorage.getItem('hsk_google_lang') || 'zh-CN', // 'zh-CN' or 'zh-TW'
      browserVoiceURI: localStorage.getItem('hsk_browser_voice') || '',
      useFallback: localStorage.getItem('hsk_use_fallback') !== 'false',
      playbackSpeed: parseFloat(localStorage.getItem('hsk_playback_speed') || '1.0'),
      repeatTimes: parseInt(localStorage.getItem('hsk_repeat_times') || '2', 10), // Default 2x shadowing
      shadowingInterval: parseFloat(localStorage.getItem('hsk_shadowing_interval') || '1.5'),
      autoScroll: true,
      fontSizeMode: 'lg', // 'base', 'lg', 'xl'
      showPinyin: true,
      showVietnamese: localStorage.getItem('hsk_show_vietnamese') !== 'false', // Default true as requested

      // Loaded sentences array: [{ id, text, pinyin, translation }]
      sentences: [],
      
      // Playback State
      isPlaying: false,
      isPaused: false,
      isSequencePlaying: false, // "Play All" mode active
      currentSentenceIndex: -1,
      currentRepeatRound: 1,
      currentAudioSource: null, // 'google_tts' or 'webspeech'

      // Pre-caching in progress
      isPrecaching: false
    };

    // --- GEMINI AI ASSISTANT STATE ---
    const aiState = {
      apiKey: localStorage.getItem('hsk_gemini_api_key') || '',
      activeTab: 'quiz', // 'quiz' or 'analysis'
      isLoading: false,
      score: 0,
      answeredCount: 0,
      totalQuestions: 0,
      quizData: null
    };

    // In-memory audio preload cache (key: text) -> HTMLAudioElement
    const audioPreloadCache = new Map();
    let browserChineseVoices = [];
    let currentSpeechUtterance = null;
    let shadowingTimeoutId = null;

    // --- DOM REFERENCES ---
    const engineGoogleBtn = document.getElementById('engineGoogleBtn');
    const engineEdgeBtn = document.getElementById('engineEdgeBtn');
    const voiceSelect = document.getElementById('voiceSelect');
    const voiceSelectLabel = document.getElementById('voiceSelectLabel');
    const voiceHelpText = document.getElementById('voiceHelpText');
    const refreshVoicesBtn = document.getElementById('refreshVoicesBtn');
    const fallbackToggle = document.getElementById('fallbackToggle');

    const speedButtons = document.querySelectorAll('.speed-btn');
    const speedValueLabel = document.getElementById('speedValueLabel');
    const repeatButtons = document.querySelectorAll('.repeat-btn');
    const intervalRange = document.getElementById('intervalRange');
    const intervalValueLabel = document.getElementById('intervalValueLabel');
    const autoScrollCheckbox = document.getElementById('autoScrollCheckbox');
    const clearCacheBtn = document.getElementById('clearCacheBtn');
    const sampleLessonBtns = document.querySelectorAll('.sample-lesson-btn');

    const chineseTextInput = document.getElementById('chineseTextInput');
    const clearTextBtn = document.getElementById('clearTextBtn');
    const pasteClipboardBtn = document.getElementById('pasteClipboardBtn');
    const parseTextBtn = document.getElementById('parseTextBtn');
    const charCountLabel = document.getElementById('charCountLabel');
    const estSentenceCountLabel = document.getElementById('estSentenceCountLabel');

    const masterControlBar = document.getElementById('masterControlBar');
    const playAllMasterBtn = document.getElementById('playAllMasterBtn');
    const playAllIcon = document.getElementById('playAllIcon');
    const playAllText = document.getElementById('playAllText');
    const stopMasterBtn = document.getElementById('stopMasterBtn');
    const prevSentenceBtn = document.getElementById('prevSentenceBtn');
    const nextSentenceBtn = document.getElementById('nextSentenceBtn');
    const precacheAllBtn = document.getElementById('precacheAllBtn');
    const playingIndexText = document.getElementById('playingIndexText');
    const repeatRoundBadge = document.getElementById('repeatRoundBadge');
    const playingStatusSubtext = document.getElementById('playingStatusSubtext');
    const masterProgressBar = document.getElementById('masterProgressBar');
    const playbackIndicatorIcon = document.getElementById('playbackIndicatorIcon');

    const sentencesContainer = document.getElementById('sentencesContainer');
    const emptySentencesPlaceholder = document.getElementById('emptySentencesPlaceholder');
    const renderedSentencesCount = document.getElementById('renderedSentencesCount');
    const showPinyinCheckbox = document.getElementById('showPinyinCheckbox');
    const showVietnameseCheckbox = document.getElementById('showVietnameseCheckbox');
    const translateContextAIBtn = document.getElementById('translateContextAIBtn');
    const translateContextBtnText = document.getElementById('translateContextBtnText');
    const toggleFontSizeBtn = document.getElementById('toggleFontSizeBtn');
    const currentFontSizeLabel = document.getElementById('currentFontSizeLabel');
    const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');

    // Welcome Modal DOM references
    const userGreetingBadge = document.getElementById('userGreetingBadge');
    const displayedUserName = document.getElementById('displayedUserName');
    const welcomeModal = document.getElementById('welcomeModal');
    const userNameInput = document.getElementById('userNameInput');
    const saveUserNameBtn = document.getElementById('saveUserNameBtn');

    const globalAudioPlayer = document.getElementById('globalAudioPlayer');
    const engineStatusDot = document.getElementById('engineStatusDot');
    const engineStatusText = document.getElementById('engineStatusText');

    // Gemini AI DOM references
    const geminiApiKeyInput = document.getElementById('geminiApiKeyInput');
    const toggleGeminiKeyBtn = document.getElementById('toggleGeminiKeyBtn');
    const geminiEyeIcon = document.getElementById('geminiEyeIcon');
    const geminiKeyStatusDot = document.getElementById('geminiKeyStatusDot');
    const geminiKeyStatusText = document.getElementById('geminiKeyStatusText');
    const generateAIQuizBtn = document.getElementById('generateAIQuizBtn');
    const generateAIBtnIcon = document.getElementById('generateAIBtnIcon');
    const generateAIBtnText = document.getElementById('generateAIBtnText');
    const aiLoadingState = document.getElementById('aiLoadingState');
    const aiEmptyPlaceholder = document.getElementById('aiEmptyPlaceholder');
    const aiResultContainer = document.getElementById('aiResultContainer');
    const tabQuizBtn = document.getElementById('tabQuizBtn');
    const tabAnalysisBtn = document.getElementById('tabAnalysisBtn');
    const tabContentQuiz = document.getElementById('tabContentQuiz');
    const tabContentAnalysis = document.getElementById('tabContentAnalysis');
    const quizBadgeCount = document.getElementById('quizBadgeCount');
    const liveScoreBox = document.getElementById('liveScoreBox');
    const liveScoreText = document.getElementById('liveScoreText');
    const quizQuestionsList = document.getElementById('quizQuestionsList');
    const aiHskLevelBadge = document.getElementById('aiHskLevelBadge');
    const aiSummaryText = document.getElementById('aiSummaryText');
    const aiVocabularyList = document.getElementById('aiVocabularyList');
    const aiGrammarList = document.getElementById('aiGrammarList');

    // --- UI NOTIFICATION TOAST ---
    function showToast(message, type = 'info') {
      const container = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      
      const colors = {
        success: 'bg-emerald-950/90 border-emerald-500/50 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.35)]',
        error: 'bg-rose-950/90 border-rose-500/50 text-rose-200 shadow-[0_0_20px_rgba(244,63,94,0.35)]',
        warning: 'bg-amber-950/90 border-amber-500/50 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.35)]',
        info: 'bg-slate-900/90 border-indigo-500/50 text-slate-200 shadow-[0_0_20px_rgba(99,102,241,0.35)]'
      };

      toast.className = `p-3.5 rounded-xl border shadow-xl backdrop-blur-md text-xs font-medium flex items-center justify-between space-x-3 transition-all duration-300 transform translate-y-3 opacity-0 pointer-events-auto ${colors[type] || colors.info}`;
      toast.innerHTML = `
        <div class="flex items-center space-x-2">
          <span>${message}</span>
        </div>
        <button class="text-slate-400 hover:text-white">&times;</button>
      `;

      container.appendChild(toast);
      
      requestAnimationFrame(() => {
        toast.classList.remove('translate-y-3', 'opacity-0');
      });

      const closeToast = () => {
        toast.classList.add('opacity-0', 'translate-y-3');
        setTimeout(() => toast.remove(), 300);
      };

      toast.querySelector('button').onclick = closeToast;
      setTimeout(closeToast, 2500);
    }

    // --- PINYIN GENERATOR UTILITY ---
    function generatePinyin(text) {
      try {
        if (window.pinyinPro && typeof window.pinyinPro.pinyin === 'function') {
          return window.pinyinPro.pinyin(text, { toneType: 'symbol' });
        }
      } catch (e) {
        console.warn('Pinyin generation error:', e);
      }
      return '';
    }

    // --- CHINESE TEXT SENTENCE SPLITTER ---
    function splitChineseText(raw) {
      if (!raw || !raw.trim()) return [];
      const clean = raw.trim();
      const regex = /[^。！？!?\r\n]+([。！？!?]+|\r?\n|$)/g;
      const matches = clean.match(regex);
      
      if (!matches) return [clean];

      const results = [];
      matches.forEach(item => {
        const sentence = item.trim();
        if (sentence && sentence.length > 0) {
          results.push(sentence);
        }
      });

      return results;
    }

    // --- GOOGLE TTS & EDGE SPEECH SYNTHESIS ENGINE ---
    function getGoogleTTSUrl(text, lang = state.googleLang) {
      const targetLang = (lang && lang.startsWith('zh-TW')) ? 'zh-TW' : 'zh-CN';
      return `https://translate.google.com/translate_tts?ie=UTF-8&tl=${encodeURIComponent(targetLang)}&client=tw-ob&q=${encodeURIComponent(text.trim())}`;
    }

    function getGoogleTTSBackupUrl(text, lang = state.googleLang) {
      const targetLang = (lang && lang.startsWith('zh-TW')) ? 'zh-TW' : 'zh-CN';
      return `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=${encodeURIComponent(targetLang)}&q=${encodeURIComponent(text.trim())}`;
    }

    function updateEngineStatusBadge() {
      engineStatusDot.className = 'w-2 h-2 rounded-full bg-emerald-400 animate-pulse';
      if (state.engine === 'google_tts') {
        engineStatusText.textContent = 'Google TTS (Chuẩn Phổ Thông)';
      } else {
        engineStatusText.textContent = 'Edge / Browser AI (Sẵn Sàng)';
      }
    }

    function updateCacheStatsUI() {
      const count = audioPreloadCache.size;
      const countLabel = document.getElementById('cacheTotalCount');
      const badgeLabel = document.getElementById('cacheCountText');
      if (countLabel) countLabel.textContent = `${count} câu`;
      if (badgeLabel) badgeLabel.textContent = `${count} câu sẵn sàng`;
    }

    function clearAllAudioCache() {
      audioPreloadCache.clear();
      updateCacheStatsUI();
      document.querySelectorAll('.audio-status-badge').forEach(badge => {
        badge.className = 'audio-status-badge text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center space-x-1';
        badge.innerHTML = '<span>⚡</span><span>Sẵn Sàng</span>';
      });
      showToast('Đã làm mới bộ nhớ đệm âm thanh!', 'success');
    }

    // --- ENUMERATE BROWSER CHINESE VOICES ---
    function populateBrowserVoices() {
      if (!('speechSynthesis' in window)) return;
      const allVoices = window.speechSynthesis.getVoices();
      
      browserChineseVoices = allVoices.filter(v => {
        const l = (v.lang || '').toLowerCase();
        const n = (v.name || '').toLowerCase();
        return l.includes('zh') || l.includes('cmn') || n.includes('chinese') || n.includes('mandarin') || n.includes('xiaoxiao') || n.includes('yunxi');
      });

      // Sort priority: Xiaoxiao, Yunxi, Yunjian, Xiaoyi, Google, zh-CN
      browserChineseVoices.sort((a, b) => {
        const score = (v) => {
          const n = v.name.toLowerCase();
          if (n.includes('xiaoxiao')) return 100;
          if (n.includes('yunxi')) return 90;
          if (n.includes('yunjian')) return 85;
          if (n.includes('xiaoyi')) return 80;
          if (n.includes('google') && v.lang.includes('zh')) return 75;
          if (v.lang.includes('zh-cn') || v.lang.includes('cmn-hans')) return 60;
          return 10;
        };
        return score(b) - score(a);
      });

      if (state.engine === 'edge_speech') {
        renderVoiceDropdown();
      }
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = populateBrowserVoices;
    }

    function renderVoiceDropdown() {
      voiceSelect.innerHTML = '';
      
      if (state.engine === 'google_tts') {
        voiceSelectLabel.textContent = 'Giọng Đọc Google';
        refreshVoicesBtn.classList.add('hidden');
        voiceHelpText.textContent = 'Giọng đọc chuẩn Google TTS chất lượng cao với âm vị Bắc Kinh chuẩn mực.';
        
        const optCN = document.createElement('option');
        optCN.value = 'zh-CN';
        optCN.textContent = '🇨🇳 Tiếng Trung Phổ Thông (Mandarin Standard - Chuẩn HSK)';
        optCN.selected = (state.googleLang === 'zh-CN');

        const optTW = document.createElement('option');
        optTW.value = 'zh-TW';
        optTW.textContent = '🇹🇼 Tiếng Trung Đài Loan (Taiwanese Mandarin)';
        optTW.selected = (state.googleLang === 'zh-TW');

        voiceSelect.appendChild(optCN);
        voiceSelect.appendChild(optTW);
      } else {
        voiceSelectLabel.textContent = 'Giọng Đọc Trình Duyệt / Edge';
        refreshVoicesBtn.classList.remove('hidden');
        voiceHelpText.textContent = 'Giọng AI tự nhiên từ Microsoft Edge & Google Chrome (Xiaoxiao, Yunxi, Google).';

        if (browserChineseVoices.length === 0) {
          const opt = document.createElement('option');
          opt.value = '';
          opt.textContent = '⚡ Giọng Tiếng Trung Mặc Định (Hệ thống)';
          voiceSelect.appendChild(opt);
        } else {
          browserChineseVoices.forEach(v => {
            const opt = document.createElement('option');
            opt.value = v.voiceURI || v.name;
            
            let cleanName = v.name;
            if (v.name.includes('Xiaoxiao')) cleanName = '🌟 Xiaoxiao (Nữ - Truyền cảm, cực chuẩn)';
            else if (v.name.includes('Yunxi')) cleanName = '🌟 Yunxi (Nam - Tự nhiên, sinh động)';
            else if (v.name.includes('Yunjian')) cleanName = '🌟 Yunjian (Nam - Dõng dạc, phát thanh)';
            else if (v.name.includes('Xiaoyi')) cleanName = '🌟 Xiaoyi (Nữ - Dịu dàng, phát âm rõ)';
            else if (v.name.includes('Yunyang')) cleanName = '🌟 Yunyang (Nam - Thời sự)';
            else if (v.name.includes('Google') && v.lang.includes('zh')) cleanName = '🌟 Google 普通话 (Nữ - Chuẩn nét)';
            else cleanName = `${v.name} (${v.lang})`;

            opt.textContent = cleanName;
            if (state.browserVoiceURI === (v.voiceURI || v.name)) {
              opt.selected = true;
            }
            voiceSelect.appendChild(opt);
          });
        }
      }
    }

    function setEngine(engineName) {
      state.engine = engineName;
      localStorage.setItem('hsk_tts_engine', engineName);

      if (engineName === 'google_tts') {
        engineGoogleBtn.className = 'engine-tab-btn p-2.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between bg-indigo-600/25 border-indigo-500/80 text-white shadow-[0_0_15px_rgba(99,102,241,0.35)] ring-1 ring-cyan-400/40';
        engineEdgeBtn.className = 'engine-tab-btn p-2.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between bg-slate-950/60 border-white/10 text-slate-300 hover:bg-slate-800/80 hover:border-indigo-500/30';
      } else {
        engineEdgeBtn.className = 'engine-tab-btn p-2.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between bg-indigo-600/25 border-indigo-500/80 text-white shadow-[0_0_15px_rgba(99,102,241,0.35)] ring-1 ring-cyan-400/40';
        engineGoogleBtn.className = 'engine-tab-btn p-2.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between bg-slate-950/60 border-white/10 text-slate-300 hover:bg-slate-800/80 hover:border-indigo-500/30';
      }

      renderVoiceDropdown();
      updateEngineStatusBadge();
      showToast(engineName === 'google_tts' ? 'Đã kích hoạt nguồn phát Google TTS!' : 'Đã kích hoạt giọng Edge / Browser Neural Voice!', 'info');
    }

    // --- PLAYBACK ENGINES ---
    function playGoogleTTS(text, onEnded, onError) {
      const primaryUrl = getGoogleTTSUrl(text, state.googleLang);
      
      globalAudioPlayer.pause();
      globalAudioPlayer.removeAttribute('src');
      globalAudioPlayer.src = primaryUrl;
      globalAudioPlayer.playbackRate = state.playbackSpeed;

      let hasEnded = false;
      const finish = () => {
        if (hasEnded) return;
        hasEnded = true;
        if (onEnded) onEnded();
      };

      globalAudioPlayer.onended = finish;
      globalAudioPlayer.onerror = (e) => {
        console.warn('Google TTS tw-ob error, trying gtx backup...', e);
        const backupUrl = getGoogleTTSBackupUrl(text, state.googleLang);
        globalAudioPlayer.onerror = (err) => {
          if (onError) onError(new Error('Google TTS không phản hồi'));
        };
        globalAudioPlayer.src = backupUrl;
        globalAudioPlayer.playbackRate = state.playbackSpeed;
        globalAudioPlayer.play().catch(err => {
          if (onError) onError(err);
        });
      };

      const playPromise = globalAudioPlayer.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn('Google TTS play failed:', err);
          if (onError) onError(err);
        });
      }
    }

    function playWebSpeech(text, onEnded, onError) {
      if (!('speechSynthesis' in window)) {
        if (onError) onError(new Error('Trình duyệt không hỗ trợ Web Speech API'));
        return;
      }

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = state.playbackSpeed;
      utterance.lang = (state.googleLang && state.googleLang.includes('TW')) ? 'zh-TW' : 'zh-CN';

      // Pick selected voice
      if (state.browserVoiceURI && browserChineseVoices.length > 0) {
        const v = browserChineseVoices.find(voice => (voice.voiceURI === state.browserVoiceURI || voice.name === state.browserVoiceURI));
        if (v) utterance.voice = v;
      } else {
        const voices = window.speechSynthesis.getVoices();
        const zhVoice = voices.find(v => v.lang.startsWith('zh') || v.lang.includes('cmn'));
        if (zhVoice) utterance.voice = zhVoice;
      }

      let ended = false;
      utterance.onend = () => {
        if (ended) return;
        ended = true;
        currentSpeechUtterance = null;
        if (onEnded) onEnded();
      };

      utterance.onerror = (e) => {
        if (ended) return;
        ended = true;
        console.warn('Web Speech error, continuing smoothly:', e);
        currentSpeechUtterance = null;
        if (onEnded) onEnded();
      };

      currentSpeechUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    }

    // --- MAIN PLAYBACK DISPATCHER FOR A SINGLE SENTENCE ---
    async function playSentence(index, loopRound = 1, isFromSequence = false) {
      if (index < 0 || index >= state.sentences.length) {
        stopPlayback();
        return;
      }

      state.isPlaying = true;
      state.isPaused = false;
      state.currentSentenceIndex = index;
      state.currentRepeatRound = loopRound;
      state.isSequencePlaying = isFromSequence;

      const sentenceObj = state.sentences[index];
      const text = sentenceObj.text;

      // Update UI highlights
      highlightActiveSentence(index, loopRound);
      updateMasterBarUI();

      if (state.engine === 'google_tts') {
        state.currentAudioSource = 'google_tts';
        playGoogleTTS(
          text,
          () => handleSentenceFinished(index, loopRound),
          (err) => {
            if (state.useFallback) {
              showToast('⚠️ Google TTS gián đoạn, tự động chuyển sang giọng Trình duyệt!', 'warning');
              state.currentAudioSource = 'webspeech';
              playWebSpeech(
                text,
                () => handleSentenceFinished(index, loopRound),
                () => stopPlayback()
              );
            } else {
              showToast(`Lỗi phát âm thanh: ${err.message || 'Mạng không ổn định'}`, 'error');
              stopPlayback();
            }
          }
        );
      } else {
        state.currentAudioSource = 'webspeech';
        playWebSpeech(
          text,
          () => handleSentenceFinished(index, loopRound),
          (err) => {
            if (state.useFallback) {
              showToast('⚠️ Giọng trình duyệt gặp lỗi, tự động chuyển sang Google TTS!', 'warning');
              state.currentAudioSource = 'google_tts';
              playGoogleTTS(
                text,
                () => handleSentenceFinished(index, loopRound),
                () => stopPlayback()
              );
            } else {
              showToast(`Lỗi phát âm thanh: ${err.message || 'Lỗi'}`, 'error');
              stopPlayback();
            }
          }
        );
      }
    }

    // --- SHADOWING LOOP & SEQUENCE LOGIC ---
    function handleSentenceFinished(index, loopRound) {
      if (!state.isPlaying) return;

      const maxRepeats = state.repeatTimes;

      if (loopRound < maxRepeats) {
        // Shadowing pause interval before repeating the SAME sentence
        setShadowingCountdownUI(index, true);
        playingStatusSubtext.textContent = `Nghỉ ${state.shadowingInterval}s để bạn nhại giọng (Shadowing)...`;

        shadowingTimeoutId = setTimeout(() => {
          setShadowingCountdownUI(index, false);
          if (state.isPlaying) {
            playSentence(index, loopRound + 1, state.isSequencePlaying);
          }
        }, state.shadowingInterval * 1000);

      } else {
        // Finished all repeats for this sentence
        setShadowingCountdownUI(index, false);

        if (state.isSequencePlaying) {
          // In "Play All" mode -> advance to next sentence
          const nextIdx = index + 1;
          if (nextIdx < state.sentences.length) {
            playingStatusSubtext.textContent = `Chuẩn bị câu tiếp theo...`;
            shadowingTimeoutId = setTimeout(() => {
              if (state.isPlaying && state.isSequencePlaying) {
                playSentence(nextIdx, 1, true);
              }
            }, 800);
          } else {
            // Reached the end of the lesson!
            showToast('🎉 Chúc mừng! Bạn đã hoàn thành toàn bộ bài học!', 'success');
            stopPlayback();
          }
        } else {
          // Finished single sentence repeats
          stopPlayback();
        }
      }
    }

    function stopPlayback() {
      state.isPlaying = false;
      state.isPaused = false;
      state.isSequencePlaying = false;
      state.currentSentenceIndex = -1;
      state.currentRepeatRound = 1;

      if (shadowingTimeoutId) {
        clearTimeout(shadowingTimeoutId);
        shadowingTimeoutId = null;
      }

      globalAudioPlayer.pause();
      globalAudioPlayer.removeAttribute('src');

      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }

      resetAllSentenceHighlights();
      updateMasterBarUI();
    }

    function pausePlayback() {
      if (!state.isPlaying) return;
      state.isPaused = true;
      if (state.currentAudioSource === 'google_tts' && !globalAudioPlayer.paused) {
        globalAudioPlayer.pause();
      } else if (state.currentAudioSource === 'webspeech' && window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
      }
      updateMasterBarUI();
    }

    function resumePlayback() {
      if (!state.isPaused) return;
      state.isPaused = false;
      if (state.currentAudioSource === 'google_tts' && globalAudioPlayer) {
        globalAudioPlayer.play();
      } else if (state.currentAudioSource === 'webspeech' && window.speechSynthesis) {
        window.speechSynthesis.resume();
      }
      updateMasterBarUI();
    }

    // --- CARD HIGHLIGHTS & AUTO SCROLL ---
    function highlightActiveSentence(index, loopRound) {
      resetAllSentenceHighlights();

      const activeCard = document.getElementById(`sentence-card-${index}`);
      if (!activeCard) return;

      activeCard.classList.remove('border-white/10', 'border-slate-800', 'bg-slate-900/65', 'bg-slate-900/70', 'shadow-[0_8px_32px_0_rgba(0,0,0,0.25)]');
      activeCard.classList.add(
        'border-indigo-400', 
        'bg-gradient-to-r', 
        'from-indigo-950/70', 
        'via-slate-900/80', 
        'to-purple-950/70', 
        'shadow-[0_0_30px_-5px_rgba(99,102,241,0.45)]', 
        'ring-1', 
        'ring-cyan-400/50',
        'active-sentence-beam'
      );

      // Thẻ số thứ tự (#01, #02...): Khi phát, chữ chuyển sang màu Cyan/Neon phát sáng
      const idxBadge = activeCard.querySelector('.sentence-index-badge');
      if (idxBadge) {
        idxBadge.classList.remove('text-slate-400', 'bg-slate-800/80', 'border-white/5');
        idxBadge.classList.add('text-cyan-300', 'bg-cyan-950/60', 'border-cyan-400/50', 'shadow-[0_0_12px_rgba(34,211,238,0.5)]');
      }

      // Show animated sound wave in the card
      const waveEl = activeCard.querySelector('.soundwave-box');
      if (waveEl) waveEl.classList.remove('hidden');

      // Update card repeat badge
      const repeatTag = activeCard.querySelector('.card-repeat-tag');
      if (repeatTag) {
        repeatTag.textContent = `Lần ${loopRound}/${state.repeatTimes}`;
        repeatTag.classList.remove('hidden');
      }

      // Auto-scroll into view if enabled
      if (state.autoScroll) {
        activeCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    function resetAllSentenceHighlights() {
      const cards = document.querySelectorAll('.sentence-card');
      cards.forEach(c => {
        c.classList.remove(
          'border-indigo-400', 
          'bg-gradient-to-r', 
          'from-indigo-950/70', 
          'via-slate-900/80', 
          'to-purple-950/70', 
          'shadow-[0_0_30px_-5px_rgba(99,102,241,0.45)]', 
          'ring-1', 
          'ring-cyan-400/50',
          'border-indigo-500', 
          'bg-indigo-950/40', 
          'ring-2', 
          'ring-indigo-500/50', 
          'shadow-2xl', 
          'shadow-indigo-500/20',
          'active-sentence-beam'
        );
        c.classList.add('border-white/10', 'bg-slate-900/65', 'shadow-[0_8px_32px_0_rgba(0,0,0,0.25)]');

        // Khôi phục thẻ số thứ tự (#01, #02...)
        const idxBadge = c.querySelector('.sentence-index-badge');
        if (idxBadge) {
          idxBadge.classList.remove('text-cyan-300', 'bg-cyan-950/60', 'border-cyan-400/50', 'shadow-[0_0_12px_rgba(34,211,238,0.5)]');
          idxBadge.classList.add('text-slate-400', 'bg-slate-800/80', 'border-white/5');
        }

        const wave = c.querySelector('.soundwave-box');
        if (wave) wave.classList.add('hidden');
        const rTag = c.querySelector('.card-repeat-tag');
        if (rTag) rTag.classList.add('hidden');
      });
    }

    function setShadowingCountdownUI(index, isPaused) {
      const activeCard = document.getElementById(`sentence-card-${index}`);
      if (!activeCard) return;
      const shadowPill = activeCard.querySelector('.shadowing-pill');
      if (shadowPill) {
        if (isPaused) {
          shadowPill.classList.remove('hidden');
        } else {
          shadowPill.classList.add('hidden');
        }
      }
    }

    function setCardLoading(index, isLoading) {
      const card = document.getElementById(`sentence-card-${index}`);
      if (!card) return;
      const playBtn = card.querySelector('.play-btn-icon');
      const spinner = card.querySelector('.loading-spinner');
      if (playBtn && spinner) {
        if (isLoading) {
          playBtn.classList.add('hidden');
          spinner.classList.remove('hidden');
        } else {
          playBtn.classList.remove('hidden');
          spinner.classList.add('hidden');
        }
      }
    }

    function updateCardCacheBadge(index, isCached) {
      const card = document.getElementById(`sentence-card-${index}`);
      if (!card) return;
      const badge = card.querySelector('.audio-status-badge');
      if (badge) {
        if (isCached) {
          badge.className = 'audio-status-badge text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center space-x-1';
          badge.innerHTML = `<span>⚡</span><span>Đã Nạp</span>`;
        }
      }
    }

    // --- MASTER PLAYBACK BAR UI UPDATE ---
    function updateMasterBarUI() {
      const total = state.sentences.length;
      
      if (total === 0) {
        playAllMasterBtn.disabled = true;
        stopMasterBtn.disabled = true;
        prevSentenceBtn.disabled = true;
        nextSentenceBtn.disabled = true;
        precacheAllBtn.disabled = true;
        playingIndexText.textContent = 'Chưa nạp bài học';
        playingStatusSubtext.textContent = 'Dán văn bản tiếng Trung hoặc chọn bài mẫu để bắt đầu';
        masterProgressBar.style.width = '0%';
        repeatRoundBadge.classList.add('hidden');
        playbackIndicatorIcon.className = 'w-10 h-10 rounded-xl bg-slate-800 text-slate-500 flex items-center justify-center border border-slate-700/80';
        return;
      }

      playAllMasterBtn.disabled = false;
      precacheAllBtn.disabled = false;

      if (state.isPlaying) {
        stopMasterBtn.disabled = false;
        prevSentenceBtn.disabled = state.currentSentenceIndex <= 0;
        nextSentenceBtn.disabled = state.currentSentenceIndex >= total - 1;

        playingIndexText.textContent = `Câu #${String(state.currentSentenceIndex + 1).padStart(2, '0')} / ${total}`;
        repeatRoundBadge.textContent = `Lặp ${state.currentRepeatRound}/${state.repeatTimes}`;
        repeatRoundBadge.classList.remove('hidden');

        const percent = ((state.currentSentenceIndex + 1) / total) * 100;
        masterProgressBar.style.width = `${percent}%`;

        playbackIndicatorIcon.className = 'w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 animate-pulse';

        if (state.isSequencePlaying) {
          playAllText.textContent = 'Tạm Dừng Toàn Bài';
          playAllIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`;
          playingStatusSubtext.textContent = state.currentAudioSource === 'google_tts' ? 'Đang phát âm thanh Google TTS...' : 'Đang phát bằng giọng Edge / Trình duyệt...';
        } else {
          playAllText.textContent = 'Phát Toàn Bộ Bài';
          playAllIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
          playingStatusSubtext.textContent = `Đang nghe riêng câu #${state.currentSentenceIndex + 1}`;
        }

      } else {
        stopMasterBtn.disabled = true;
        prevSentenceBtn.disabled = true;
        nextSentenceBtn.disabled = true;
        repeatRoundBadge.classList.add('hidden');

        playAllText.textContent = 'Phát Toàn Bộ Bài';
        playAllIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
        playingIndexText.textContent = `Đã sẵn sàng (${total} câu)`;
        playingStatusSubtext.textContent = `Bấm 'Phát Toàn Bộ' hoặc nhấp vào từng câu để luyện nhại giọng`;
        masterProgressBar.style.width = '0%';
        playbackIndicatorIcon.className = 'w-10 h-10 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center border border-slate-700/80';
      }
    }

    // --- PRE-LOAD ALL AUDIO TO MEMORY ---
    async function precacheAllSentences() {
      if (state.isPrecaching || !state.sentences.length) return;
      state.isPrecaching = true;
      precacheAllBtn.disabled = true;
      precacheAllBtn.innerHTML = `
        <svg class="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <span>Đang Nạp Đệm...</span>
      `;

      let newlyCached = 0;

      for (let i = 0; i < state.sentences.length; i++) {
        const item = state.sentences[i];
        setCardLoading(i, true);
        const url = getGoogleTTSUrl(item.text, state.googleLang);

        await new Promise((resolve) => {
          const audio = new Audio();
          audio.preload = 'auto';
          audio.src = url;
          audio.oncanplaythrough = () => {
            newlyCached++;
            audioPreloadCache.set(item.text, audio);
            updateCardCacheBadge(i, true);
            setCardLoading(i, false);
            resolve();
          };
          audio.onerror = () => {
            setCardLoading(i, false);
            resolve();
          };
          setTimeout(() => {
            setCardLoading(i, false);
            resolve();
          }, 1500);
        });
      }

      state.isPrecaching = false;
      precacheAllBtn.disabled = false;
      precacheAllBtn.innerHTML = `
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
        <span>Nạp Đệm Toàn Bài</span>
      `;

      updateCacheStatsUI();
      showToast(`Đã nạp đệm sẵn sàng ${newlyCached}/${state.sentences.length} câu vào bộ nhớ!`, 'success');
    }

    // --- DOWNLOAD MP3 FOR NOTEBOOKLM ---
    function downloadSentenceAudio(index) {
      if (index < 0 || index >= state.sentences.length) return;
      const item = state.sentences[index];
      const url = getGoogleTTSUrl(item.text, state.googleLang);

      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      const safeText = item.text.slice(0, 10).replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '_');
      a.download = `HSK_Cau_${String(index + 1).padStart(2, '0')}_${safeText}.mp3`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
      }, 600);
      showToast(`Đang tải file MP3 cho câu #${index + 1}...`, 'success');
    }

    // --- PARSE & RENDER SENTENCES ---
    async function parseAndLoadSentences(text, customTranslations = null) {
      if (!text || !text.trim()) {
        showToast('Vui lòng dán văn bản tiếng Trung trước!', 'warning');
        return;
      }

      stopPlayback();

      const rawSentences = splitChineseText(text);
      if (rawSentences.length === 0) {
        showToast('Không tìm thấy câu hợp lệ trong văn bản!', 'warning');
        return;
      }

      state.sentences = rawSentences.map((s, idx) => ({
        id: idx,
        text: s,
        pinyin: generatePinyin(s),
        translation: (customTranslations && customTranslations[idx]) ? customTranslations[idx] : ''
      }));

      renderedSentencesCount.textContent = `${state.sentences.length} câu`;
      renderSentencesList();
      updateMasterBarUI();
      showToast(`Đã phân tích thành công ${state.sentences.length} câu! Bấm phát ngay.`, 'success');
    }

    function renderSentencesList() {
      sentencesContainer.innerHTML = '';

      if (state.sentences.length === 0) {
        emptySentencesPlaceholder.classList.remove('hidden');
        sentencesContainer.appendChild(emptySentencesPlaceholder);
        return;
      }

      emptySentencesPlaceholder.classList.add('hidden');

      for (let i = 0; i < state.sentences.length; i++) {
        const item = state.sentences[i];
        const isPreloaded = audioPreloadCache.has(item.text);

        const card = document.createElement('div');
        card.id = `sentence-card-${i}`;
        card.className = `sentence-card bg-slate-900/65 hover:bg-slate-900/85 backdrop-blur-xl border border-white/10 hover:border-indigo-500/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] rounded-2xl p-3.5 lg:p-5 transition-all duration-300 group relative`;

        const fontClass = state.fontSizeMode === 'xl' ? 'text-xl lg:text-2xl' : 
                         state.fontSizeMode === 'lg' ? 'text-lg lg:text-xl' : 'text-base lg:text-lg';

        card.innerHTML = `
          <div class="flex items-start justify-between gap-2 sm:gap-3">
            
            <!-- Cột nội dung câu -->
            <div class="flex-1 min-w-0 space-y-2 cursor-pointer select-text" onclick="window.handleSentenceClick(${i})">
              
              <!-- Header của câu: STT, Pinyin, Badge -->
              <div class="flex flex-wrap items-center gap-2">
                <span class="sentence-index-badge text-[11px] font-mono font-bold text-slate-400 group-hover:text-indigo-400 transition bg-slate-800/80 px-2 py-0.5 rounded-md border border-white/5">
                  #${String(i + 1).padStart(2, '0')}
                </span>

                <!-- Repeat Round Tag (Shadowing) -->
                <span class="card-repeat-tag hidden text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium animate-pulse">
                  Lần 1/2
                </span>

                <!-- Shadowing pause indicator -->
                <span class="shadowing-pill hidden text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-medium">
                  🗣️ Lượt bạn nhại lại...
                </span>

                <!-- Status pill -->
                <span class="audio-status-badge text-[10px] font-medium px-2 py-0.5 rounded-full ${isPreloaded ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'} flex items-center space-x-1">
                  <span>⚡</span>
                  <span>${isPreloaded ? 'Đã Nạp' : 'Sẵn Sàng'}</span>
                </span>
              </div>

              <!-- Pinyin Row -->
              <div class="pinyin-row text-xs lg:text-sm text-indigo-300/80 font-mono tracking-wide ${state.showPinyin ? '' : 'hidden'}">
                ${item.pinyin || ''}
              </div>

              <!-- Main Chinese Characters -->
              <div class="chinese-text font-chinese ${fontClass} font-medium text-slate-100 group-hover:text-white leading-relaxed">
                ${item.text}
              </div>

              <!-- Context Translation Row -->
              <div class="translation-row text-xs lg:text-sm text-slate-300 font-sans mt-1.5 leading-relaxed ${state.showVietnamese ? '' : 'hidden'}">
                <span class="text-indigo-400 font-medium">Dịch nghĩa:</span> <span class="translation-text">${item.translation || '...'}</span>
              </div>
            </div>

            <!-- Cột nút thao tác bên phải -->
            <div class="flex items-center space-x-1 sm:space-x-1.5 shrink-0 ml-1">
              
              <!-- Nút Nghe câu này -->
              <button 
                type="button" 
                class="single-play-btn w-9 h-9 rounded-xl bg-slate-800/90 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] active:scale-95 border border-white/5 shadow-sm"
                title="Phát câu này"
                onclick="window.handleSentenceClick(${i})"
              >
                <!-- Normal Play Icon -->
                <svg class="play-btn-icon w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <!-- Loading Spinner -->
                <svg class="loading-spinner hidden w-4 h-4 animate-spin text-indigo-400" viewBox="0 0 24 24" fill="none">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
              </button>

              <!-- Nút Tải file MP3 (NotebookLM) -->
              <button 
                type="button" 
                class="download-btn w-9 h-9 rounded-xl bg-slate-800/70 hover:bg-slate-700/90 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-all duration-200 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] active:scale-95 border border-white/5"
                title="Tải file MP3 cho NotebookLM"
                onclick="window.downloadSentenceAudio(${i})"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>

              <!-- Nút Sao chép câu -->
              <button 
                type="button" 
                class="copy-btn w-9 h-9 rounded-xl bg-slate-800/70 hover:bg-slate-700/90 text-slate-400 hover:text-cyan-300 flex items-center justify-center transition-all duration-200 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] active:scale-95 border border-white/5"
                title="Sao chép chữ Hán"
                onclick="window.copySentenceText(${i})"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>

            </div>

          </div>

          <!-- Animated Soundwave inside card when playing (Spectrum Gradient Cyan -> Indigo -> Purple -> Pink -> Cyan) -->
          <div class="soundwave-box hidden absolute bottom-2 right-4 flex items-end space-x-1 h-6 pointer-events-none">
            <span class="w-1 bg-cyan-400 rounded-full animate-soundwave bar-1 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
            <span class="w-1 bg-indigo-400 rounded-full animate-soundwave bar-2 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
            <span class="w-1 bg-purple-400 rounded-full animate-soundwave bar-3 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
            <span class="w-1 bg-pink-400 rounded-full animate-soundwave bar-4 shadow-[0_0_8px_rgba(244,114,182,0.8)]"></span>
            <span class="w-1 bg-cyan-300 rounded-full animate-soundwave bar-5 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
          </div>
        `;

        sentencesContainer.appendChild(card);
      }
    }

    // Expose helpers globally for inline HTML onclick attributes
    window.handleSentenceClick = function(index) {
      if (state.isPlaying && state.currentSentenceIndex === index) {
        stopPlayback();
      } else {
        playSentence(index, 1, false);
      }
    };

    window.downloadSentenceAudio = downloadSentenceAudio;

    window.copySentenceText = function(index) {
      if (index >= 0 && index < state.sentences.length) {
        navigator.clipboard.writeText(state.sentences[index].text).then(() => {
          showToast(`Đã sao chép câu #${index + 1}!`, 'info');
        });
      }
    };

    // ========================================================
    // --- GEMINI AI CLIENT & QUIZ / ANALYSIS LOGIC ---
    // ========================================================

    function updateGeminiKeyStatusUI() {
      const key = (aiState.apiKey || '').trim();
      if (key.length > 10) {
        geminiKeyStatusDot.className = 'w-2 h-2 rounded-full bg-emerald-400';
        geminiKeyStatusText.textContent = 'Đã lưu key';
        geminiKeyStatusText.className = 'text-emerald-400 font-medium';
      } else {
        geminiKeyStatusDot.className = 'w-2 h-2 rounded-full bg-amber-400';
        geminiKeyStatusText.textContent = 'Chưa nhập key';
        geminiKeyStatusText.className = 'text-amber-400 font-medium';
      }
    }

    function switchAITab(tabName) {
      aiState.activeTab = tabName;
      if (tabName === 'quiz') {
        tabQuizBtn.className = 'ai-tab-btn px-3.5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] ring-1 ring-cyan-400/40 flex items-center space-x-2 transition-all';
        tabAnalysisBtn.className = 'ai-tab-btn px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all flex items-center space-x-2';
        tabContentQuiz.classList.remove('hidden');
        tabContentAnalysis.classList.add('hidden');
      } else {
        tabAnalysisBtn.className = 'ai-tab-btn px-3.5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] ring-1 ring-cyan-400/40 flex items-center space-x-2 transition-all';
        tabQuizBtn.className = 'ai-tab-btn px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all flex items-center space-x-2';
        tabContentAnalysis.classList.remove('hidden');
        tabContentQuiz.classList.add('hidden');
      }
    }

    function updateGeminiModelBadge(modelName) {
      const geminiModelBadge = document.getElementById('geminiModelBadge');
      if (geminiModelBadge) {
        if (modelName) {
          geminiModelBadge.textContent = `Đang xử lý bằng: ${modelName}`;
          geminiModelBadge.className = 'text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/20';
        } else {
          geminiModelBadge.textContent = 'Gemini AI';
          geminiModelBadge.className = 'text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40';
        }
      }
    }

    // Danh sách model ưu tiên từ cao xuống thấp
    const GEMINI_MODELS_CASCADE = [
      'gemini-3.1-flash-lite',
      'gemini-3.8-flash'
    ];

    async function callGeminiApi(apiKey, promptText) {
      let lastError = null;

      for (const model of GEMINI_MODELS_CASCADE) {
        // Loại bỏ tiền tố models/ nếu có trong tên model trước khi ghép vào URL để tránh lỗi trùng lặp models/models/...
        const cleanModel = model.replace(/^models\//, '');
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${cleanModel}:generateContent?key=${encodeURIComponent(apiKey)}`;

        // Cập nhật huy hiệu UI trước khi gọi
        updateGeminiModelBadge(cleanModel);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 45000); // Timeout 45s

        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [{ text: promptText }]
                }
              ],
              generationConfig: {
                responseMimeType: 'application/json'
              }
            }),
            signal: controller.signal
          });

          clearTimeout(timeoutId);

          // 1. Phản hồi thành công
          if (response.ok) {
            const resData = await response.json();
            return { data: resData, model: cleanModel };
          }

          // 2. Lỗi 503, 429 hoặc các lỗi HTTP khác -> Bỏ qua retry, chuyển sang model kế tiếp
          console.warn(`⚠️ Model ${cleanModel} phản hồi HTTP ${response.status}. Chuyển sang model tiếp theo...`);
          let errDesc = `HTTP ${response.status}`;
          try {
            const errJson = await response.json();
            if (errJson?.error?.message) errDesc = errJson.error.message;
          } catch (_) {}
          lastError = new Error(`[${cleanModel}] ${errDesc}`);
          continue;

        } catch (err) {
          clearTimeout(timeoutId);
          if (err.name === 'AbortError') {
            console.warn(`⚠️ Yêu cầu đến model ${cleanModel} quá hạn (timeout 45s). Chuyển model...`);
            lastError = new Error(`[${cleanModel}] Request Timeout (45s)`);
            continue;
          }
          console.warn(`⚠️ Lỗi kết nối đến model ${cleanModel} (${err.message}). Chuyển model...`);
          lastError = err;
          continue; 
        }
      }

      throw lastError || new Error('Tất cả các model trong danh sách đều không khả dụng.');
    }

    async function handleGenerateAIQuiz() {
      const key = (aiState.apiKey || '').trim();
      if (!key) {
        showToast('Vui lòng nhập Google Gemini API Key để tiếp tục!', 'warning');
        geminiApiKeyInput.focus();
        return;
      }

      const rawText = (chineseTextInput.value || '').trim();
      if (!rawText) {
        showToast('Vui lòng dán hoặc chọn bài học tiếng Trung trước!', 'warning');
        chineseTextInput.focus();
        return;
      }

      aiState.isLoading = true;
      generateAIQuizBtn.disabled = true;
      generateAIBtnText.textContent = 'Đang Phân Tích...';
      generateAIBtnIcon.classList.add('animate-spin');

      aiEmptyPlaceholder.classList.add('hidden');
      aiResultContainer.classList.add('hidden');
      aiLoadingState.classList.remove('hidden');

      const prompt = `Bạn là một chuyên gia giáo dục và khảo thí tiếng Trung Quốc (HSK & TOCFL).
Hãy đọc kỹ đoạn văn bản tiếng Trung dưới đây, phân tích bối cảnh, ngữ pháp và tạo một bộ câu hỏi trắc nghiệm ngữ cảnh chất lượng cao cho người học.

Đoạn văn bản tiếng Trung:
"""
${rawText}
"""

YÊU CẦU ĐẦU RA PHẢI LÀ MỘT OBJECT JSON HỢP LỆ VỚI CÁC TRƯỜNG SAU:
{
  "hskLevel": "Ước lượng cấp độ (ví dụ: HSK 2 - HSK 3 hoặc HSK 3 - HSK 4)",
  "summary": "Tóm tắt ngắn gọn nội dung và bối cảnh của bài đọc bằng tiếng Việt (khoảng 2-3 câu dễ hiểu)",
  "vocabulary": [
    {
      "word": "Chữ Hán",
      "pinyin": "Phiên âm pinyin chuẩn có thanh điệu",
      "meaning": "Nghĩa tiếng Việt",
      "context": "Câu trích dẫn ngắn trong bài có chứa từ này"
    }
  ],
  "grammar": [
    {
      "pattern": "Cấu trúc ngữ pháp trọng tâm (ví dụ: 虽然...但是... / 除了...以外)",
      "explanation": "Giải thích chi tiết ngữ nghĩa và cách dùng trong ngữ cảnh bài đọc"
    }
  ],
  "quiz": [
    {
      "id": 1,
      "question": "Câu hỏi kiểm tra đọc hiểu bằng chữ Hán",
      "questionPinyin": "Pinyin của câu hỏi",
      "questionVi": "Dịch câu hỏi sang tiếng Việt",
      "options": [
        "A. Lựa chọn 1",
        "B. Lựa chọn 2",
        "C. Lựa chọn 3",
        "D. Lựa chọn 4"
      ],
      "correctIndex": 0,
      "explanation": "Giải thích chi tiết tại sao đáp án này đúng, trích dẫn chi tiết ngữ cảnh trong bài làm căn cứ."
    }
  ]
}

Quy định bắt buộc:
1. "vocabulary" gồm 4 đến 6 từ vựng tiêu biểu nhất trong bài.
2. "grammar" gồm 2 đến 3 mẫu câu/ngữ pháp quan trọng nhất.
3. "quiz" gồm 3 đến 5 câu hỏi trắc nghiệm ngữ cảnh (về ý chính, nhân vật, hành động, số lượng, cảm xúc, chi tiết then chốt).
4. "correctIndex" là số nguyên từ 0 đến 3 (tương ứng với A, B, C, D).
5. Chỉ xuất JSON thuần túy, không dùng markdown.`;

      try {
        const { data: responseData, model: usedModel } = await callGeminiApi(key, prompt);
        const candidate = responseData?.candidates?.[0];
        const textPart = candidate?.content?.parts?.[0]?.text;

        if (!textPart) {
          throw new Error('Gemini không phản hồi nội dung hợp lệ.');
        }

        const cleanJson = textPart.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
        const parsedData = JSON.parse(cleanJson);

        renderAIResults(parsedData, usedModel);

        // Cập nhật huy hiệu (Badge) trên giao diện: Đang xử lý bằng: ${model}
        updateGeminiModelBadge(usedModel);

        showToast(`Đã tạo trắc nghiệm bằng: ${usedModel}`, 'success');

        // Gộp logic dịch tuần tự sau khi tạo trắc nghiệm (Rate limit prevention)
        const needsTranslation = state.sentences.some(s => !s.translation || s.translation === '...');
        if (needsTranslation) {
          await translateSentencesWithGemini(true);
        }
      } catch (err) {
        console.error('Gemini error:', err);
        showToast('Máy chủ Google AI đang bận. Vui lòng bấm thử lại sau giây lát!', 'error');
        if (!aiState.quizData) {
          aiEmptyPlaceholder.classList.remove('hidden');
        } else {
          aiResultContainer.classList.remove('hidden');
        }
      } finally {
        aiState.isLoading = false;
        generateAIQuizBtn.disabled = false;
        generateAIBtnText.textContent = 'Phân Tích & Tạo Câu Hỏi';
        generateAIBtnIcon.classList.remove('animate-spin');
        aiLoadingState.classList.add('hidden');
      }
    }

    function renderAIResults(data, usedModel = '') {
      aiState.quizData = data;
      aiState.score = 0;
      aiState.answeredCount = 0;
      aiState.totalQuestions = (data.quiz && Array.isArray(data.quiz)) ? data.quiz.length : 0;

      // 1. Update Badges & Counters
      quizBadgeCount.textContent = aiState.totalQuestions;
      liveScoreText.textContent = `0/${aiState.totalQuestions}`;
      aiHskLevelBadge.textContent = `${data.hskLevel || 'HSK 2 - 3'}${usedModel ? ` • ${usedModel}` : ''}`;
      aiSummaryText.textContent = data.summary || 'Chưa có tóm tắt.';

      // 2. Render Vocabulary
      aiVocabularyList.innerHTML = '';
      if (data.vocabulary && Array.isArray(data.vocabulary)) {
        data.vocabulary.forEach(v => {
          const card = document.createElement('div');
          card.className = 'p-3 rounded-xl bg-slate-950/60 border border-white/10 hover:border-indigo-500/40 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] backdrop-blur-md transition-all duration-200 space-y-1';
          card.innerHTML = `
            <div class="flex items-center justify-between">
              <span class="text-base font-chinese font-bold text-slate-100">${v.word || ''}</span>
              <span class="text-xs font-mono text-indigo-400">${v.pinyin || ''}</span>
            </div>
            <div class="text-xs text-emerald-400 font-medium">${v.meaning || ''}</div>
            ${v.context ? `<div class="text-[11px] text-slate-400 italic pt-1 border-t border-slate-900 font-chinese leading-relaxed">"${v.context}"</div>` : ''}
          `;
          aiVocabularyList.appendChild(card);
        });
      }

      // 3. Render Grammar
      aiGrammarList.innerHTML = '';
      if (data.grammar && Array.isArray(data.grammar)) {
        data.grammar.forEach(g => {
          const card = document.createElement('div');
          card.className = 'p-3 rounded-xl bg-slate-950/60 border border-white/10 hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md transition-all duration-200 space-y-1.5';
          card.innerHTML = `
            <div class="text-xs font-bold font-chinese text-purple-300 bg-purple-950/40 px-2.5 py-1 rounded-lg border border-purple-800/40 inline-block">
              ${g.pattern || ''}
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${g.explanation || ''}</p>
          `;
          aiGrammarList.appendChild(card);
        });
      }

      // 4. Render Quiz Questions
      quizQuestionsList.innerHTML = '';
      if (data.quiz && Array.isArray(data.quiz)) {
        data.quiz.forEach((q, qIdx) => {
          const qCard = document.createElement('div');
          qCard.id = `quiz-question-card-${qIdx}`;
          qCard.className = 'quiz-question-card bg-slate-950/70 border border-white/10 rounded-xl p-4 sm:p-5 space-y-3.5 shadow-[0_4px_20px_0_rgba(0,0,0,0.3)] backdrop-blur-md transition-all';
          qCard.dataset.questionIndex = qIdx;
          qCard.dataset.answered = 'false';

          let optionsHtml = '';
          const labels = ['A', 'B', 'C', 'D', 'E', 'F'];
          (q.options || []).forEach((opt, optIdx) => {
            const letter = labels[optIdx] || '';
            optionsHtml += `
              <button 
                type="button" 
                class="quiz-opt-btn text-left py-3.5 px-5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/80 border border-white/10 text-base sm:text-lg font-medium tracking-wide text-slate-100 hover:border-indigo-400/60 hover:shadow-[0_0_12px_rgba(99,102,241,0.25)] hover:scale-[1.01] transition-all duration-200 cursor-pointer flex items-center justify-between group"
                data-opt-index="${optIdx}"
                onclick="window.handleQuizOptionSelect(${qIdx}, ${optIdx})"
              >
                <div class="flex items-center">
                  <span class="font-bold text-cyan-400 mr-2.5">${letter}.</span>
                  <span class="opt-label leading-relaxed">${opt}</span>
                </div>
                <span class="opt-icon text-sm ml-2 shrink-0"></span>
              </button>
            `;
          });

          qCard.innerHTML = `
            <div class="flex items-center justify-between pb-2 border-b border-slate-850">
              <span class="text-[11px] font-mono font-bold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-md border border-purple-500/20">
                Câu #${String(qIdx + 1).padStart(2, '0')}
              </span>
              <span class="question-status-pill text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                Chưa trả lời
              </span>
            </div>

            <div class="space-y-1">
              <div class="text-xs text-indigo-300/80 font-mono tracking-wide">${q.questionPinyin || ''}</div>
              <div class="text-sm sm:text-base font-chinese font-semibold text-slate-100 leading-relaxed">${q.question}</div>
              <div class="text-xs text-slate-400 italic">Dịch: ${q.questionVi || ''}</div>
            </div>

            <div class="grid grid-cols-1 gap-3 pt-2">
              ${optionsHtml}
            </div>

            <div class="explanation-box hidden mt-3 p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs space-y-1.5 animate-fadeIn">
              <div class="font-semibold text-indigo-300 flex items-center space-x-1.5">
                <svg class="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span>Giải thích chi tiết & Trích dẫn ngữ cảnh:</span>
              </div>
              <p class="text-slate-300 leading-relaxed text-[11px]">${q.explanation || 'Không có giải thích chi tiết.'}</p>
            </div>
          `;

          quizQuestionsList.appendChild(qCard);
        });
      }

      aiEmptyPlaceholder.classList.add('hidden');
      aiResultContainer.classList.remove('hidden');
      switchAITab('quiz');
    }

    window.handleQuizOptionSelect = function(qIdx, optIdx) {
      if (!aiState.quizData || !aiState.quizData.quiz) return;
      const q = aiState.quizData.quiz[qIdx];
      if (!q) return;

      const qCard = document.getElementById(`quiz-question-card-${qIdx}`);
      if (!qCard || qCard.dataset.answered === 'true') return;

      qCard.dataset.answered = 'true';

      const allBtns = qCard.querySelectorAll('.quiz-opt-btn');
      allBtns.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('cursor-not-allowed', 'opacity-90');
      });

      const selectedBtn = allBtns[optIdx];
      const correctOptIdx = parseInt(q.correctIndex, 10);
      const isCorrect = (optIdx === correctOptIdx);
      const statusPill = qCard.querySelector('.question-status-pill');

      if (isCorrect) {
        aiState.score++;
        if (selectedBtn) {
          selectedBtn.className = 'quiz-opt-btn text-left py-3.5 px-5 rounded-2xl bg-emerald-950/70 border border-emerald-500 text-base sm:text-lg font-medium tracking-wide text-emerald-200 ring-2 ring-emerald-500/40 shadow-lg shadow-emerald-500/10 transition-all duration-200 flex items-center justify-between cursor-not-allowed';
          const icon = selectedBtn.querySelector('.opt-icon');
          if (icon) icon.textContent = '✅';
        }
        if (statusPill) {
          statusPill.className = 'question-status-pill text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
          statusPill.textContent = 'Đúng (+1đ)';
        }
        showToast('🎉 Chính xác! Bạn đã chọn đúng đáp án.', 'success');
      } else {
        if (selectedBtn) {
          selectedBtn.className = 'quiz-opt-btn text-left py-3.5 px-5 rounded-2xl bg-rose-950/70 border border-rose-500 text-base sm:text-lg font-medium tracking-wide text-rose-200 ring-2 ring-rose-500/40 transition-all duration-200 flex items-center justify-between cursor-not-allowed';
          const icon = selectedBtn.querySelector('.opt-icon');
          if (icon) icon.textContent = '❌';
        }

        // Highlight correct button
        const correctBtn = allBtns[correctOptIdx];
        if (correctBtn) {
          correctBtn.className = 'quiz-opt-btn text-left py-3.5 px-5 rounded-2xl bg-emerald-950/60 border border-emerald-500/80 text-base sm:text-lg font-medium tracking-wide text-emerald-300 ring-1 ring-emerald-500/30 transition-all duration-200 flex items-center justify-between cursor-not-allowed';
          const icon = correctBtn.querySelector('.opt-icon');
          if (icon) icon.textContent = '✅';
        }

        if (statusPill) {
          statusPill.className = 'question-status-pill text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30';
          statusPill.textContent = 'Chưa chính xác';
        }
        showToast('Chưa chính xác! Hãy đọc lời giải thích chi tiết bên dưới.', 'warning');
      }

      aiState.answeredCount++;
      liveScoreText.textContent = `${aiState.score}/${aiState.totalQuestions}`;

      // Reveal explanation
      const expBox = qCard.querySelector('.explanation-box');
      if (expBox) expBox.classList.remove('hidden');

      // Check if all questions are finished
      if (aiState.answeredCount === aiState.totalQuestions) {
        setTimeout(() => {
          showToast(`🏆 Bạn đã hoàn thành toàn bộ bài tập! Kết quả: ${aiState.score}/${aiState.totalQuestions} câu đúng.`, 'success');
        }, 500);
      }
    };

    // --- GEMINI AI CONTEXT-AWARE TRANSLATION ---
    async function translateSentencesWithGemini(isAuto = false) {
      const key = (aiState.apiKey || '').trim();
      if (!key) {
        if (!isAuto) {
          showToast('Vui lòng nhập Google Gemini API Key để dịch chuẩn ngữ cảnh!', 'warning');
          if (geminiApiKeyInput) {
            geminiApiKeyInput.focus();
            geminiApiKeyInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
        return;
      }

      if (!state.sentences || state.sentences.length === 0) {
        if (!isAuto) {
          showToast('Chưa có câu nào được nạp để dịch!', 'warning');
        }
        return;
      }

      // Lấy toàn bộ văn bản gốc làm bối cảnh toàn cục (Context)
      const rawFullText = (chineseTextInput.value || '').trim() || state.sentences.map(s => s.text).join('\n');
      const sentencesListForPrompt = state.sentences.map((s, idx) => ({
        index: idx,
        original: s.text
      }));

      // Cập nhật trạng thái nút bấm Dịch AI
      if (translateContextAIBtn) {
        translateContextAIBtn.disabled = true;
        if (translateContextBtnText) {
          translateContextBtnText.textContent = 'Đang dịch AI...';
        }
      }

      // Hiển thị trạng thái đang dịch trên từng thẻ câu nếu câu đó chưa có bản dịch
      state.sentences.forEach((s, idx) => {
        if (!s.translation) {
          const card = document.getElementById(`sentence-card-${idx}`);
          if (card) {
            const transText = card.querySelector('.translation-text');
            if (transText) {
              transText.textContent = 'Đang phân tích ngữ cảnh với Gemini AI...';
            }
          }
        }
      });

      const prompt = `Bạn là một chuyên gia ngôn ngữ học và dịch thuật ngữ cảnh tiếng Trung - tiếng Việt cao cấp (HSK & TOCFL).
Hãy đọc kỹ TOÀN BỘ đoạn văn bản gốc dưới đây để nắm trọn vẹn ngữ cảnh giao tiếp (Context):
"""
${rawFullText}
"""

Dưới đây là danh sách các câu đã được tách theo thứ tự:
${JSON.stringify(sentencesListForPrompt, null, 2)}

NGUYÊN TẮC DỊCH THUẬT BẮT BUỘC (CONTEXT-AWARE TRANSLATION):
1. Đưa TOÀN BỘ đoạn văn bản gốc làm bối cảnh để hiểu sâu: Ai đang nói với ai? Bối cảnh diễn ra ở đâu (trường học, quán ăn, sân bay, thương lượng mua bán, công sở, bạn bè thân mật)?
2. Quy chuẩn dịch thuật:
   - Dịch THOÁT Ý, tự nhiên theo văn phong của người Việt Nam hiện đại, TUYỆT ĐỐI KHÔNG dịch gượng gạo, thô cứng từng từ (word-by-word).
   - Xác định chính xác ngôi xưng hô phù hợp bối cảnh (thầy - em, cậu - tớ, anh - em, nhân viên - quý khách...).
   - Dịch chuẩn các từ ngữ khí (吧, 呢, 呀, 啊, 嘛) và các cụm thành ngữ, khẩu ngữ Trung Quốc.
3. Ánh xạ chính xác theo đúng từng "index" từ 0 đến ${state.sentences.length - 1}.

YÊU CẦU ĐẦU RA PHẢI LÀ MỘT OBJECT JSON HỢP LỆ VỚI CẤU TRÚC SAU:
{
  "contextSummary": "Mô tả ngắn bối cảnh (Ví dụ: Hội thoại bạn bè rủ nhau đi ăn)",
  "translations": [
    {
      "index": 0,
      "original": "câu gốc tiếng Trung",
      "vi": "bản dịch tiếng Việt chuẩn văn phong và ngữ cảnh"
    }
  ]
}
Chỉ xuất JSON thuần túy, không có văn bản giải thích nào khác ngoài chuỗi JSON.`;

      try {
        const { data: responseData, model: usedModel } = await callGeminiApi(key, prompt);
        const candidate = responseData?.candidates?.[0];
        const textPart = candidate?.content?.parts?.[0]?.text;

        if (!textPart) {
          throw new Error('Gemini không trả về nội dung dịch hợp lệ.');
        }

        const cleanJson = textPart.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
        const parsedData = JSON.parse(cleanJson);

        if (parsedData && Array.isArray(parsedData.translations)) {
          parsedData.translations.forEach(item => {
            const idx = typeof item.index === 'number' ? item.index : parseInt(item.index, 10);
            if (state.sentences[idx]) {
              state.sentences[idx].translation = item.vi || '';
              const card = document.getElementById(`sentence-card-${idx}`);
              if (card) {
                const transText = card.querySelector('.translation-text');
                if (transText) {
                  transText.textContent = item.vi || '';
                }
              }
            }
          });

          // Cập nhật huy hiệu (Badge) trên giao diện: Đang xử lý bằng: ${model}
          updateGeminiModelBadge(usedModel);

          const summary = parsedData.contextSummary ? ` • ${parsedData.contextSummary}` : '';
          showToast(`Đang xử lý bằng: ${usedModel}${summary}`, 'success');
        }
      } catch (err) {
        console.error('Gemini translation error:', err);
        if (!isAuto) {
          showToast('Máy chủ Google AI đang bận. Vui lòng bấm thử lại sau giây lát!', 'error');
        }
        // Khôi phục placeholder nếu bị lỗi
        state.sentences.forEach((s, idx) => {
          const card = document.getElementById(`sentence-card-${idx}`);
          if (card) {
            const transText = card.querySelector('.translation-text');
            if (transText && transText.textContent.includes('Đang phân tích')) {
              transText.textContent = s.translation || '...';
            }
          }
        });
      } finally {
        if (translateContextAIBtn) {
          translateContextAIBtn.disabled = false;
          if (translateContextBtnText) {
            translateContextBtnText.textContent = 'Dịch AI Ngữ Cảnh';
          }
        }
      }
    }

    // --- EVENT LISTENERS & SETUP ---
    function toggleSidebar() {
      const aside = document.querySelector('aside');
      const section = document.querySelector('section');
      if (!aside || !section) return;

      if (aside.classList.contains('hidden')) {
        aside.classList.remove('hidden');
        section.classList.remove('lg:col-span-12');
        section.classList.add('lg:col-span-8');
        localStorage.setItem('hsk_sidebar_collapsed', 'false');
      } else {
        aside.classList.add('hidden');
        section.classList.remove('lg:col-span-8');
        section.classList.add('lg:col-span-12');
        localStorage.setItem('hsk_sidebar_collapsed', 'true');
      }
    }

    function setupEventListeners() {
      // Cosmic Welcome Modal Logic
      if (userGreetingBadge) {
        userGreetingBadge.addEventListener('click', () => {
          if (welcomeModal) welcomeModal.classList.remove('hidden');
          if (userNameInput) {
            userNameInput.value = localStorage.getItem('hsk_user_name') || '';
            userNameInput.focus();
          }
        });
      }

      if (saveUserNameBtn) {
        saveUserNameBtn.addEventListener('click', () => {
          const name = userNameInput.value.trim();
          if (name) {
            localStorage.setItem('hsk_user_name', name);
            if (displayedUserName) displayedUserName.textContent = name;
            
            // LAUNCH SEQUENCE
            if (typeof playSciFiWarpSound === 'function') playSciFiWarpSound();
            const rect = saveUserNameBtn.getBoundingClientRect();
            if (typeof createSupernovaParticles === 'function') createSupernovaParticles(rect.left + rect.width / 2, rect.top + rect.height / 2);
            
            saveUserNameBtn.innerHTML = '<span>ĐANG KHỞI ĐỘNG... 🚀</span>';
            document.body.classList.add('animate-screen-shake');
            
            const modalContent = welcomeModal.querySelector('.bg-slate-900\\/90') || welcomeModal.firstElementChild;
            if (modalContent) modalContent.classList.add('animate-hyperspace');
            
            setTimeout(() => {
              if (welcomeModal) welcomeModal.classList.add('hidden');
              if (modalContent) modalContent.classList.remove('animate-hyperspace');
              saveUserNameBtn.innerHTML = '<span>Bắt Đầu Hành Trình 🚀</span>';
              document.body.classList.remove('animate-screen-shake');
              showToast(`Chào mừng Chỉ huy ${name} đã khởi hành! 🚀`, 'success');
            }, 500);

          } else {
            showToast('Vui lòng nhập tên của bạn để tiếp tục!', 'warning');
            userNameInput.focus();
          }
        });
      }
      
      if (userNameInput) {
        userNameInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            if (saveUserNameBtn) saveUserNameBtn.click();
          }
        });
      }

      // Sidebar Toggle
      if (toggleSidebarBtn) {
        toggleSidebarBtn.addEventListener('click', toggleSidebar);
      }
      document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key.toLowerCase() === 'b') {
          e.preventDefault();
          toggleSidebar();
        }
      });

      // Engine Selection
      engineGoogleBtn.addEventListener('click', () => setEngine('google_tts'));
      engineEdgeBtn.addEventListener('click', () => setEngine('edge_speech'));

      // Voice selection change
      voiceSelect.addEventListener('change', (e) => {
        if (state.engine === 'google_tts') {
          state.googleLang = e.target.value;
          localStorage.setItem('hsk_google_lang', state.googleLang);
        } else {
          state.browserVoiceURI = e.target.value;
          localStorage.setItem('hsk_browser_voice', state.browserVoiceURI);
        }
      });

      // Refresh browser voices button
      refreshVoicesBtn.addEventListener('click', () => {
        populateBrowserVoices();
        showToast('Đã quét lại danh sách giọng đọc từ trình duyệt!', 'success');
      });

      // Fallback toggle
      fallbackToggle.checked = state.useFallback;
      fallbackToggle.addEventListener('change', (e) => {
        state.useFallback = e.target.checked;
        localStorage.setItem('hsk_use_fallback', state.useFallback);
        showToast(state.useFallback ? 'Đã bật dự phòng thông minh' : 'Đã tắt dự phòng thông minh', 'info');
      });

      // Speed control buttons
      speedButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const speed = parseFloat(btn.dataset.speed);
          state.playbackSpeed = speed;
          localStorage.setItem('hsk_playback_speed', speed);
          speedValueLabel.textContent = `${speed.toFixed(2)}x`;
          speedButtons.forEach(b => {
            b.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm', 'shadow-[0_0_15px_rgba(99,102,241,0.5)]', 'ring-1', 'ring-cyan-400/60', 'ring-indigo-400/30');
            b.classList.add('bg-slate-800/80', 'text-slate-300');
          });
          btn.classList.add('bg-indigo-600', 'text-white', 'shadow-[0_0_15px_rgba(99,102,241,0.5)]', 'ring-1', 'ring-cyan-400/60');
          btn.classList.remove('bg-slate-800/80', 'bg-slate-800', 'text-slate-300');

          if (globalAudioPlayer) {
            globalAudioPlayer.playbackRate = speed;
          }
        });
      });

      // Repeat count buttons
      repeatButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const rep = parseInt(btn.dataset.repeat, 10);
          state.repeatTimes = rep;
          localStorage.setItem('hsk_repeat_times', rep);
          repeatButtons.forEach(b => {
            b.classList.remove('bg-emerald-600', 'text-white', 'ring-1', 'ring-emerald-300/60', 'shadow-[0_0_15px_rgba(16,185,129,0.5)]', 'ring-emerald-400/30');
            b.classList.add('bg-slate-800/80', 'text-slate-300');
          });
          btn.classList.add('bg-emerald-600', 'text-white', 'ring-1', 'ring-emerald-300/60', 'shadow-[0_0_15px_rgba(16,185,129,0.5)]');
          btn.classList.remove('bg-slate-800/80', 'bg-slate-800', 'text-slate-300');
          document.getElementById('repeatBadge').textContent = `Lặp ${rep} lần`;
        });
      });

      // Shadowing Interval slider
      intervalRange.value = state.shadowingInterval;
      intervalValueLabel.textContent = `${state.shadowingInterval.toFixed(1)} giây`;
      intervalRange.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        state.shadowingInterval = val;
        localStorage.setItem('hsk_shadowing_interval', val);
        intervalValueLabel.textContent = `${val.toFixed(1)} giây`;
      });

      // Auto scroll checkbox
      autoScrollCheckbox.checked = state.autoScroll;
      autoScrollCheckbox.addEventListener('change', (e) => {
        state.autoScroll = e.target.checked;
      });

      // Clear cache button
      clearCacheBtn.addEventListener('click', () => {
        clearAllAudioCache();
      });

      // Sample Lessons click (nạp kèm bản dịch ngữ cảnh chuẩn HSK)
      sampleLessonBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const lessonKey = btn.dataset.lesson;
          if (SAMPLE_LESSONS[lessonKey]) {
            chineseTextInput.value = SAMPLE_LESSONS[lessonKey];
            updateTextCounter();
            const presetTranslations = SAMPLE_LESSON_TRANSLATIONS[lessonKey] || null;
            parseAndLoadSentences(chineseTextInput.value, presetTranslations);
          }
        });
      });

      // Textarea input counters
      chineseTextInput.addEventListener('input', updateTextCounter);

      function updateTextCounter() {
        const val = chineseTextInput.value;
        charCountLabel.textContent = val.length;
        const est = splitChineseText(val).length;
        estSentenceCountLabel.textContent = est;
      }

      // Clear text button
      clearTextBtn.addEventListener('click', () => {
        chineseTextInput.value = '';
        updateTextCounter();
        stopPlayback();
        state.sentences = [];
        renderedSentencesCount.textContent = '0 câu';
        renderSentencesList();
        updateMasterBarUI();
      });

      // Paste from clipboard button
      pasteClipboardBtn.addEventListener('click', async () => {
        try {
          const text = await navigator.clipboard.readText();
          if (text) {
            chineseTextInput.value = text;
            updateTextCounter();
            showToast('Đã dán văn bản từ clipboard!', 'info');
          }
        } catch (e) {
          showToast('Hãy dán thủ công bằng phím tắt Ctrl+V.', 'warning');
        }
      });

      // Parse button
      parseTextBtn.addEventListener('click', () => {
        parseAndLoadSentences(chineseTextInput.value);
      });

      // Play All Master Button
      playAllMasterBtn.addEventListener('click', () => {
        if (!state.sentences.length) {
          showToast('Vui lòng nạp câu hỏi trước!', 'warning');
          return;
        }

        if (state.isPlaying && state.isSequencePlaying) {
          pausePlayback();
        } else if (state.isPaused) {
          resumePlayback();
        } else {
          const startIdx = state.currentSentenceIndex >= 0 ? state.currentSentenceIndex : 0;
          playSentence(startIdx, 1, true);
        }
      });

      // Stop Master Button
      stopMasterBtn.addEventListener('click', () => {
        stopPlayback();
      });

      // Prev sentence
      prevSentenceBtn.addEventListener('click', () => {
        if (state.currentSentenceIndex > 0) {
          playSentence(state.currentSentenceIndex - 1, 1, state.isSequencePlaying);
        }
      });

      // Next sentence
      nextSentenceBtn.addEventListener('click', () => {
        if (state.currentSentenceIndex < state.sentences.length - 1) {
          playSentence(state.currentSentenceIndex + 1, 1, state.isSequencePlaying);
        }
      });

      // Precache all button
      precacheAllBtn.addEventListener('click', precacheAllSentences);

      // Pinyin Toggle
      showPinyinCheckbox.addEventListener('change', (e) => {
        state.showPinyin = e.target.checked;
        document.querySelectorAll('.pinyin-row').forEach(el => {
          if (state.showPinyin) el.classList.remove('hidden');
          else el.classList.add('hidden');
        });
      });

      // Vietnamese Translation Toggle
      if (showVietnameseCheckbox) {
        showVietnameseCheckbox.checked = state.showVietnamese;
        showVietnameseCheckbox.addEventListener('change', (e) => {
          state.showVietnamese = e.target.checked;
          localStorage.setItem('hsk_show_vietnamese', state.showVietnamese);
          document.querySelectorAll('.translation-row').forEach(el => {
            if (state.showVietnamese) el.classList.remove('hidden');
            else el.classList.add('hidden');
          });
        });
      }

      // Context AI Translation Button
      if (translateContextAIBtn) {
        translateContextAIBtn.addEventListener('click', () => {
          translateSentencesWithGemini(false);
        });
      }

      // Font size toggle
      toggleFontSizeBtn.addEventListener('click', () => {
        const modes = ['base', 'lg', 'xl'];
        const labels = { base: 'Vừa', lg: 'Lớn', xl: 'Rất Lớn' };
        const currentIdx = modes.indexOf(state.fontSizeMode);
        const nextMode = modes[(currentIdx + 1) % modes.length];
        state.fontSizeMode = nextMode;
        currentFontSizeLabel.textContent = labels[nextMode];
        renderSentencesList();
      });

      // --- GEMINI AI EVENT LISTENERS ---
      geminiApiKeyInput.value = aiState.apiKey;
      updateGeminiKeyStatusUI();
      geminiApiKeyInput.addEventListener('input', (e) => {
        aiState.apiKey = e.target.value.trim();
        localStorage.setItem('hsk_gemini_api_key', aiState.apiKey);
        updateGeminiKeyStatusUI();
      });

      toggleGeminiKeyBtn.addEventListener('click', () => {
        if (geminiApiKeyInput.type === 'password') {
          geminiApiKeyInput.type = 'text';
          toggleGeminiKeyBtn.classList.add('text-purple-400');
        } else {
          geminiApiKeyInput.type = 'password';
          toggleGeminiKeyBtn.classList.remove('text-purple-400');
        }
      });

      generateAIQuizBtn.addEventListener('click', handleGenerateAIQuiz);
      tabQuizBtn.addEventListener('click', () => switchAITab('quiz'));
      tabAnalysisBtn.addEventListener('click', () => switchAITab('analysis'));
    }

    // --- APP INITIALIZATION ---
    async function initApp() {
      // Welcome Modal Check
      const storedName = localStorage.getItem('hsk_user_name');
      if (!storedName) {
        if (welcomeModal) welcomeModal.classList.remove('hidden');
      } else {
        if (displayedUserName) displayedUserName.textContent = storedName;
      }

      // Khôi phục trạng thái sidebar
      if (localStorage.getItem('hsk_sidebar_collapsed') === 'true') {
        const aside = document.querySelector('aside');
        const section = document.querySelector('section');
        if (aside && section) {
          aside.classList.add('hidden');
          section.classList.remove('lg:col-span-8');
          section.classList.add('lg:col-span-12');
        }
      }

      setupEventListeners();
      populateBrowserVoices();
      setEngine(state.engine);
      updateEngineStatusBadge();
      updateMasterBarUI();

      if (typeof initStarfield === 'function') initStarfield();

      // Pre-load Sample Lesson 7 kèm bản dịch ngữ cảnh mẫu chuẩn mực
      chineseTextInput.value = SAMPLE_LESSONS.bai7;
      charCountLabel.textContent = chineseTextInput.value.length;
      estSentenceCountLabel.textContent = splitChineseText(chineseTextInput.value).length;
      await parseAndLoadSentences(chineseTextInput.value, SAMPLE_LESSON_TRANSLATIONS.bai7);
    }

    // Run when DOM ready
    window.addEventListener('DOMContentLoaded', initApp);

    // --- MOBILE AUDIO UNLOCK (Audio Unlock on First Touch) ---
    let audioUnlocked = false;
    function unlockAudio() {
      if (audioUnlocked) return;
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const buffer = audioCtx.createBuffer(1, 1, 22050);
      const source = audioCtx.createBufferSource();
      source.buffer = buffer;
      source.connect(audioCtx.destination);
      source.start(0);
      audioUnlocked = true;
      document.removeEventListener('touchstart', unlockAudio);
      document.removeEventListener('click', unlockAudio);
    }
    document.addEventListener('touchstart', unlockAudio, { once: true });
    document.addEventListener('click', unlockAudio, { once: true });

    // --- 3D INTERACTIVE STARFIELD CANVAS ---
    function initStarfield() {
      const canvas = document.getElementById('spaceCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let width, height;
      let stars = [];
      const numStars = 180;

      function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
      }
      window.addEventListener('resize', resize);
      resize();

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          z: Math.random() * 1000 + 100,
          size: Math.random() * 1.2 + 0.3,
          color: Math.random() > 0.8 ? '#a5b4fc' : (Math.random() > 0.6 ? '#67e8f9' : '#ffffff')
        });
      }

      function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.save();
        ctx.translate(width / 2, height / 2);

        stars.forEach(star => {
          star.z -= 0.1; // slow drift (80% slower)
          if (star.z <= 0) {
            star.z = 1000;
            star.x = Math.random() * width - width / 2;
            star.y = Math.random() * height - height / 2;
          }

          const k = 128.0 / star.z;
          const px = star.x * k;
          const py = star.y * k;

          if (px >= -width / 2 && px <= width / 2 && py >= -height / 2 && py <= height / 2) {
            const size = (1 - star.z / 1000) * star.size * 2;
            const safeRadius = Math.max(0.1, Math.abs(size || 1));
            const opacity = (1 - star.z / 1000) * 0.6;
            ctx.beginPath();
            ctx.arc(px, py, safeRadius, 0, Math.PI * 2);
            ctx.fillStyle = star.color;
            ctx.globalAlpha = opacity;
            ctx.fill();
          }
        });
        ctx.restore();
        requestAnimationFrame(animate);
      }
      animate();
    }

    // --- SCI-FI WARP SOUND (WEB AUDIO API) ---
    function playSciFiWarpSound() {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      try {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(50, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.4);
        osc.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 1.2);

        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1.2);
      } catch (e) {
        console.warn('Web Audio API not supported', e);
      }
    }

    // --- SUPERNOVA PARTICLES EFFECT ---
    function createSupernovaParticles(x, y) {
      const colors = ['#22d3ee', '#818cf8', '#fbbf24', '#e879f9'];
      for (let i = 0; i < 60; i++) {
        const particle = document.createElement('div');
        particle.className = 'fixed rounded-full pointer-events-none z-[100]';
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.boxShadow = `0 0 10px ${particle.style.backgroundColor}`;

        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 150 + 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.animate([
          { transform: 'translate(0,0) scale(1)', opacity: 1 },
          { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ], {
          duration: Math.random() * 600 + 400,
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
          fill: 'forwards'
        });

        setTimeout(() => particle.remove(), 1000);
      }
    }
