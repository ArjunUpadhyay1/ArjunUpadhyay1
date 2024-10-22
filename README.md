<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="icon" type="images/png" href="images/logo512.png">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/a36897a85f.js" crossorigin="anonymous"></script>
    <script type="text/javascript">
        (function(c, l, a, r, i, t, y) {
            c[a] = c[a] || function() {
                (c[a].q = c[a].q || []).push(arguments)
            };
            t = l.createElement(r);
            t.async = 1;
            t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", "i4u605tz2t");
    </script>
</head>

<body>
    <div class="home-button" onclick="goToHome()">
        <i class="fas fa-home"></i>
    </div>

    <script>
        function goToHome() {
            window.location.href = ''; // Navigate to the homepage
        }
    </script>
    <div id="header">
        <div class="container">
            <nav>
                <img src="https://scontent.fbwa5-2.fna.fbcdn.net/v/t39.30808-1/447749187_122180158604059269_6265327918466479141_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=_tWYh_ek9CYQ7kNvgF9qGPZ&_nc_ht=scontent.fbwa5-2.fna&oh=00_AYDfQXVSoIPoAPlGl5pHSilcFdOOrb9RxkszANXSpW2dbg&oe=66A2367C"
                    class="logo" id="logo">
                <ul id="sidememu">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#services">My Skills</a></li>
                    <li><a href="#portfolio">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <i class="fa-solid fa-xmark" onclick="closememu()"></i>
                </ul>
                <i class="fa-solid fa-bars" onclick="openmemu()"></i>
            </nav>
            <div class="header-text animated animatedFadeInUp fadeInUp">
                <p>Friendly Coder</p>
                <h1>Hi i'm <span>Arjun</span><br>Upadhyay,from Nepal</h1>
            </div>
        </div>
    </div>
    <!-- --------about-------->
    <div id="about">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <img src="images/user.jpg">
                </div>
                <div class="about-col-2">
                    <h1 class="sub-title">About Me</h1>
                    <p>Hello I am Arjun Upadhyay, I live in Pachaljharana Rural Municipality of Kalikot district. Pachaljharana is the tallest waterfall in South Asia and is now located in Kalikot district. And I studied in Class 1 to 5 at Shree Chulimalika
                        Basic School, Pachaljharna 4, Lapha Kalikot, and from Class 6 to 10, I studied at Shree Nepal National Secondary School Khajura 8 Birendranagar Surkhet and from class 11 to 12 at Surkhet Model College.</p>
                    <p><br>My father's name is Krishna Prasad Upadhyaya and my mother's name is Sharda Kumari Baral and they now live in Kalikot district and my sister's name is Jayanti Upadhyay, Sristi Upadhyay, and Kritika Upadhyaya.</p>
                    <p><br>My father is the biggest astrologer of Kalikot district and he is the secretary of Karnali State Astrology Council and my mother is an honest employee of Pachaljharna Rural Municipality and she has also got the award of an honest
                        employee of Pachaljharna Rural Municipality and my mother is a social worker in Pachaljharna Rural Municipality. </p>
                    <h1><br>Father</h1>largest astrologer of Karnali state</br>
                    <h1><br>mother</h1>Honest employee of Pachaljharna Rural Municipality, Social Manager of pachaljharana rural municipality</br>
                    <div class="tab-titles">
                        <p class="tab-links active-link" onclick="opentab('skills')">Skills</p>
                        <p class="tab-links" onclick="opentab('experience')">Experience</p>
                        <p class="tab-links" onclick="opentab('education')">Education</p>
                    </div>
                    <div class="tab-contents active-tab" id="skills">
                        <ul>
                            <li><span>Python</span><br>Django, BNLP and machine learning.</li>
                            <li><span>C/C++</span><br>Problem solving and object oriented programming</li>
                            <li><span>Front End Developer</span><br>Building websites using HTML,CSS and JS</li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="experience">
                        <ul>
                            <li><span>May 2023 - Jul 2023 <strong>:</strong> Remote</span><br>AI–ML Virtual Internship at <strong>AICTE – NEAT</strong></li>
                            <li><span>May 2023 <strong>:</strong> On-site</span><br>Artificial Intelligence (AI) Training at <strong>ARDENT COMPUTECH PVT. LTD.</strong></li>
                            <li><span>Aug 2022 <strong>:</strong> Remote</span><br>Android Application Development Internship at <strong>MTA LEARNING PVT.LTD.</strong></li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="education">
                        <ul>
                            <li><span>2078-03-15 – Expected 2080-12-30</span><br>+2 management<strong>surkhet model college</strong></li>
                            <li><span>2073-01-05 – Expected 2078-03-05</span><br>६-१० कक्षा <strong>श्री नेपाल राष्ट्रिय माध्यामिक बिद्यालय वीरेन्द्रनगर ८ खजुरा सुर्खेत</strong></li>
                            <li><span>2068-01-01 – Expected 2073-01-01</span><br>१-५ कक्षा <strong>श्री चुलिमालिका आधारभूत विद्यालय पचालझरना ४ लाफा कालिकोट</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- -------services--------- -->
    <div id="services">
        <div class="container">
            <h1 class="sub-title">My Skills</h1>
            <div class="services-list">
                <div>
                    <i class="fa-solid fa-code"></i>
                    <h2>Web Design</h2>
                    <p>As a front-end developer, I can create and implement the user interface of a website or web application. This involves working with HTML, CSS, and JavaScript to design and develop web pages that are visually appealing, responsive,
                        and user-friendly. </p>
                    <a href="#services">Learn more</a>
                </div>
                <div>
                    <i class="fa-brands fa-python"></i>
                    <h2>Python</h2>
                    <p>As a Python developer, I can design, develop, and maintain software applications using the Python programming language. This could involve building web applications like Django or implementing machine learning algorithms, depending
                        on the specific job requirements. </p>
                    <a href="https://github.com/ThisIs-Developer/Python" target="_blank">Learn more</a>
                </div>
                <div>
                    <i class="fa-solid fa-bug"></i>
                    <h2>C/C++</h2>
                    <p>As a C/C++ developer, I can do problem solving using the C and C++ programming languages. This could involve developing pointer structure file handling and object oriented programming, depending on the specific job requirements. </p>
                    <a href="https://github.com/ThisIs-Developer/C-Plus-Plus" target="_blank">Learn more</a>
                </div>
            </div>
        </div>
    </div>
    <!-- -------portfolio------ -->
    <div id="portfolio">
        <div class="container">
            <h1 class="sub-title">My Projects</h1>
            <div class="work-list">
                <div class="work">
                    <img src="images/work_1.jpg">
                    <div class="layer">
                        <h3>Sentiment Analysis of COVID-19 Tweets</h3>
                        <p>
                            Sentiment analysis of COVID-19 tweets aims to determine the emotional tone and attitudes towards the pandemic using natural language processing techniques.</p>
                        <a href="https://github.com/ThisIs-Developer/Sentiment-Analysis-of-Covid-19-Tweets" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="images/work_2.jpg">
                    <div class="layer">
                        <h3>Sleep Prevention Device</h3>
                        <p>A sleep prevention device is a tool designed to keep individuals awake and alert, often used in safety-critical occupations.</p>
                        <a href="https://github.com/ThisIs-Developer/Sleep-Prevention-Device" target="_blank"><i
                                class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="images/work_3.jpg">
                    <div class="layer">
                        <h3>Bengali Natural Language Processing(BNLP)</h3>
                        <p>Bengali Natural Language Processing (BNLP) is the application of computational techniques to analyze, understand and generate Bengali language.</p>
                        <p><br>Currently under development </p>
                        <a href="#portfolio"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            <a href="https://github.com/ThisIs-Developer?tab=repositories" class="btn">See more</a>
        </div>
    </div>
    <!-- ------contact------ -->
    <div id="contact">
        <div class="container">
            <div class="row">
                <div class="contact-left">
                    <h1 class="sub-title">Contact me</h1>
                </div>
                <div class="fw-reachus">
                    <div class="reach-email">
                        <span class="mb-2">Email Us</span>
                        <p><i class="far fa-envelope"></i> <a href="mailto: arjunupadhyay933@gmail.com" title="mail to arjunupadhyay933@gmail.com" class="_click_record b-email link-hover" data-websiteid="1370708" data-type="email"> arjunupadhyay933@gmail.com </a></p>
                    </div>
                    <div class="reach-phone">
                        <span class="mb-2">Call Us</span>
                        <p class="mb-0"><i class="fas fa-phone"></i> <a href="tel:+977 9766439970" class="_click_record b-phone link-hover" data-websiteid="1370708" title="call +977 9766439970" data-type="phone"> +977 9766439970 nepal</a></p>

                    </div>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/Arjun Upadhyay/" target="_blank"><i
                                class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/arjunupadhyay301/" target="_blank"><i
                                class="fa-brands fa-instagram"></i></i></a>
                        <a href="https://www.x.com/ntnepal" target="_blank"><i
                                class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.whatsapp.com/ArjunUpadhyay/" target="_blank"><i
                                class="fa-brands fa-whatsapp"></i></i></a>
                        <a href="https://www.tiktok.com/Ak/" target="_blank"><i
                                class="fa-brands fa-tiktok"></i></i></a>
                        <span class="mx-2 s-link-wrap"> <a title="go to youtube page" href="https://youtube.com/@NT-Nepal" target="_blank" class="p-2 s-link" rel="noopener nofollow"> <i class="fab s-logo fa-youtube"></i> </a> </span>
                    </div>
                </div <div class="contact-right">
                <form name="submit-to-ms-word">
                    <input type="text" name="Name" placeholder="Your Name" required>
                    <input type="email" name="Email" placeholder="Your Email" required>
                    <input type="phone" name="number" placeholder="your phone.No" required>
                    <input type="county" name="number" placeholder="your country" required>
                    <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                    <button type="submit" class="btn btn2">Submit</button>
                </form>
                <span id="wait-msg"></span>
                <span id="msg"></span>
            </div>
        </div>
    </div>

    <a href="#" onclick="doGTranslate('ne|en');return false;" title="English" class="gflag nturl" style="background-position:-0px -0px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="English" /></a>
    <a href="#" onclick="doGTranslate('en|ne');return false;" title="Nepali" class="gflag nturl" style="background-position:-200px -100px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="Nepal" /></a>
    <a href="#" onclick="doGTranslate('en|ru');return false;" title="Russian" class="gflag nturl" style="background-position:-500px -200px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="Russian" /></a>
    <a href="#" onclick="doGTranslate('en|es');return false;" title="Spanish" class="gflag nturl" style="background-position:-600px -200px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="Spanish" /></a>
    <a href="#" onclick="doGTranslate('en|zh-CN');return false;" title="Chinese (Simplified)" class="gflag nturl" style="background-position:-300px -0px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="Chinese (Simplified)" /></a>


    <br /><select id="google_translate_element1" onchange="doGTranslate(this);">
    <option value="">Select Language</option>
    <option value="en|af">Afrikaans</option>
    <option value="en|sq">Albanian</option>
    <option value="en|ar">Arabic</option>
    <option value="en|hy">Armenian</option>
    <option value="en|az">Azerbaijani</option>
    <option value="en|eu">Basque</option>
    <option value="en|be">Belarusian</option>
    <option value="en|bg">Bulgarian</option>
    <option value="en|ca">Catalan</option>
    <option value="en|zh-CN">Chinese (Simplified)</option>
    <option value="en|zh-TW">Chinese (Traditional)</option>
    <option value="en|hr">Croatian</option>
    <option value="en|cs">Czech</option>
    <option value="en|da">Danish</option>
    <option value="en|nl">Dutch</option>
    <option value="en|en">English</option>
    <option value="en|et">Estonian</option>
    <option value="en|tl">Filipino</option>
    <option value="en|fi">Finnish</option>
    <option value="en|fr">French</option>
    <option value="en|gl">Galician</option>
    <option value="en|ka">Georgian</option>
    <option value="en|de">German</option>
    <option value="en|el">Greek</option>
    <option value="en|ht">Haitian Creole</option>
    <option value="en|iw">Hebrew</option>
    <option value="en|hu">Hungarian</option>
    <option value="en|is">Icelandic</option>
    <option value="en|id">Indonesian</option>
    <option value="en|ga">Irish</option>
    <option value="en|it">Italian</option>
    <option value="en|ja">Japanese</option>
    <option value="en|ko">Korean</option>
    <option value="en|lv">Latvian</option>
    <option value="en|lt">Lithuanian</option>
    <option value="en|mk">Macedonian</option>
    <option value="en|ms">Malay</option>
    <option value="en|mt">Maltese</option>
    <option value="en|no">Norwegian</option>
    <option value="en|fa">Persian</option>
    <option value="en|pl">Polish</option>
    <option value="en|pt">Portuguese</option>
    <option value="en|ro">Romanian</option>
    <option value="en|ru">Russian</option>
    <option value="en|sr">Serbian</option>
    <option value="en|sk">Slovak</option>
    <option value="en|sl">Slovenian</option>
    <option value="en|es">Spanish</option>
    <option value="en|sw">Swahili</option>
    <option value="en|sv">Swedish</option>
    <option value="en|th">Thai</option>
    <option value="en|tr">Turkish</option>
    <option value="en|uk">Ukrainian</option>
    <option value="en|ur">Urdu</option>
    <option value="en|vi">Vietnamese</option>
    <option value="en|cy">Welsh</option>
    <option value="en|yi">Yiddish</option>
    <option value="en|bn">Bengali</option>
    <option value="en|bs">Bosnian</option>
    <option value="en|ceb">Cebuano</option>
    <option value="en|eo">Esperanto</option>
    <option value="en|gu">Gujarati</option>
    <option value="en|ha">Hausa</option>
    <option value="en|hmn">Hmong</option>
    <option value="en|ig">Igbo</option>
    <option value="en|jw">Javanese</option>
    <option value="en|kn">Kannada</option>
    <option value="en|km">Khmer</option>
    <option value="en|lo">Lao</option>
    <option value="en|la">Latin</option>
    <option value="en|mi">Maori</option>
    <option value="en|mr">Marathi</option>
    <option value="en|mn">Mongolian</option>
    <option value="en|ne">Nepali</option>
    <option value="en|pa">Punjabi</option>
    <option value="en|so">Somali</option>
    <option value="en|yo">Yoruba</option>
    <option value="en|zu">Zulu</option>
</select>
    <div id="google_translate_element2"></div>


    <script type="text/javascript">
        function googleTranslateElementInit2() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                autoDisplay: false
            }, 'google_translate_element2');
        }
    </script>
    <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2"></script>

    <script type="text/javascript">
        /* <![CDATA[ */
        eval(function(p, a, c, k, e, r) {
                e = function(c) {
                    return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
                };
                if (!''.replace(/^/, String)) {
                    while (c--) r[e(c)] = k[c] || e(c);
                    k = [function(e) {
                        return r[e]
                    }];
                    e = function() {
                        return '\\w+'
                    };
                    c = 1
                };
                while (c--)
                    if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
                return p
            }('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}', 43, 43, '||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'), 0, {}))
            /* ]]> */

        var style = document.createElement('style');
        // handle style
        style.innerHTML = 'a.gflag {vertical-align:middle;font-size:18px;padding:1px 0;background-repeat:no-repeat;background-image:url(//gtranslate.net/flags/16.png);} a.gflag img {border:0;} a.gflag:hover {background-image:url(//gtranslate.net/flags/16a.png);} #goog-gt-tt,.VIpgJd-ZVi9od-aZ2wEe-wOHMyf {display:none !important;} .goog-te-banner-frame {display:none !important;} .goog-te-menu-value:hover {text-decoration:none !important;} body {top:0 !important;} #google_translate_element1 {display:none!important;}';
        // remove translation info from header
        style.innerHTML += 'body > .skiptranslate { display: none; }';
        document.head.appendChild(style);
    </script>
    <div class="copyright">
        <p>Copyright © 2024 Arjun.</p>
    </div>
    </div>

    <script>
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link")
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link")
            document.getElementById(tabname).classList.add("active-tab");
        }
    </script>
    <script>
        var sidememu = document.getElementById("sidememu")

        function openmemu() {
            sidememu.style.right = "0";
        }

        function closememu() {
            sidememu.style.right = "-200px";
        }
    </script>

</body>

</html>
