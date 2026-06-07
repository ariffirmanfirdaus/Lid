const openBtn = document.getElementById("openBtn");
const mainContent = document.getElementById("mainContent");
const welcome = document.getElementById("welcome");

let heartsStarted = false;

/* =========================
   OPEN GIFT
========================= */

openBtn.addEventListener("click", () => {

    welcome.style.display = "none";
    mainContent.classList.remove("hidden");

    launchConfetti();

    if(!heartsStarted){
        setInterval(createHeart, 500);
        heartsStarted = true;
    }

});

/* =========================
   CONFETTI
========================= */

function launchConfetti() {

    const container = document.getElementById("confetti");

    for(let i = 0; i < 180; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.style.left =
        Math.random() * 100 + "%";

        piece.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

        piece.style.opacity =
        Math.random();

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6000);

    }

}

/* =========================
   BLOW CANDLE
========================= */

const blowBtn =
document.getElementById("blowBtn");

const candle =
document.getElementById("candle");

const wishResult =
document.getElementById("wishResult");

blowBtn.addEventListener("click", () => {

    candle.innerHTML = "💨";

    wishResult.innerHTML =
    "💖 Semoga semua harapan Kak Indri di usia 29 tahun dapat terwujud 💖";

    launchConfetti();

});

/* =========================
   29 WISHES
========================= */

const wishes = [

"Semoga selalu diberikan kesehatan yang baik.",
"Semoga setiap hari mbak dipenuhi kebahagiaan.",
"Semoga rezeki mbak semakin lancar.",
"Semoga semua impianmu semakin dekat menjadi kenyataan.",
"Semoga selalu dikelilingi orang-orang yang baik.",
"Semoga diberikan umur yang penuh berkah.",
"Semoga pekerjaan dan usaha mbak semakin sukses.",
"Semoga setiap kesulitan berubah menjadi pelajaran berharga.",
"Semoga hati mbak selalu tenang dan damai.",
"Semoga senyum mbak selalu menghiasi hari-harimu.",
"Semoga Mbak selalu menjadi kebanggaan dan sumber kebahagiaan bagi keluarga kita.",
"Semoga persahabatanmu semakin erat.",
"Semoga selalu memiliki semangat untuk meraih cita-cita.",
"Semoga setiap langkahmu dipenuhi keberuntungan.",
"Semoga kesehatan mental dan fisik selalu terjaga.",
"Semoga tahun ini membawa banyak kabar baik.",
"Semoga setiap doa yang baik dikabulkan.",
"Semoga selalu menjadi inspirasi bagi orang lain.",
"Semoga hidupmu dipenuhi momen-momen indah.",
"Semoga diberikan kekuatan menghadapi setiap tantangan.",
"Semoga perjalanan hidupmu selalu diberi kemudahan.",
"Semoga selalu menemukan alasan untuk bersyukur.",
"Semoga kebahagiaan datang dari hal-hal kecil setiap hari.",
"Semoga cinta dan kasih sayang selalu mengelilingimu.",
"Semoga masa depanmu semakin cerah.",
"Semoga keberanianmu terus bertambah.",
"Semoga segala usaha membuahkan hasil terbaik.",
"Semoga semua harapan baikmu tercapai satu per satu.",
"Semoga usia 29 menjadi tahun yang paling berkesan dan membahagiakan."

];

const starsContainer =
document.getElementById("stars");

/* =========================
   WISH DISPLAY
========================= */

const wishDisplay =
document.createElement("div");

wishDisplay.id = "wishDisplay";

wishDisplay.style.display = "none";
wishDisplay.style.marginTop = "30px";
wishDisplay.style.padding = "25px";
wishDisplay.style.maxWidth = "700px";
wishDisplay.style.marginLeft = "auto";
wishDisplay.style.marginRight = "auto";
wishDisplay.style.borderRadius = "20px";

wishDisplay.style.background =
"rgba(255,105,180,0.12)";

wishDisplay.style.border =
"1px solid rgba(255,105,180,0.4)";

wishDisplay.style.color = "white";

wishDisplay.style.lineHeight = "1.8";

wishDisplay.style.backdropFilter =
"blur(10px)";

wishDisplay.style.boxShadow =
"0 0 20px rgba(255,105,180,0.3)";

starsContainer.parentElement
.appendChild(wishDisplay);

/* =========================
   CREATE STARS
========================= */

for(let i = 0; i < 29; i++) {

    const star =
    document.createElement("div");

    star.classList.add("star");

    star.innerHTML = "⭐";

    star.title =
    "Harapan #" + (i + 1);

    star.addEventListener("click", () => {

        wishDisplay.style.display =
        "block";

        wishDisplay.innerHTML = `
        <h3 style="
        color:#ffd1e8;
        margin-bottom:15px;
        font-size:1.5rem;
        ">
        ⭐ Bintang Harapan #${i + 1}
        </h3>

        <p style="font-size:1.1rem;">
        ${wishes[i]}
        </p>
        `;

        wishDisplay.animate([
            {
                opacity:0,
                transform:"translateY(20px)"
            },
            {
                opacity:1,
                transform:"translateY(0)"
            }
        ],{
            duration:500,
            fill:"forwards"
        });

    });

    starsContainer.appendChild(star);

}

/* =========================
   MUSIC
========================= */

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

let playing = false;

if(musicBtn && music){

    musicBtn.addEventListener("click", () => {

        if(!playing){

            music.play();

            musicBtn.innerHTML =
            "🔇 Musik OFF";

            playing = true;

        }else{

            music.pause();

            musicBtn.innerHTML =
            "🔊 Musik ON";

            playing = false;

        }

    });

}

/* =========================
   FALLING HEARTS
========================= */

function createHeart(){

    const hearts =
    document.getElementById("hearts");

    if(!hearts) return;

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    const heartTypes = [
        "💖",
        "💕",
        "💗",
        "💓",
        "💝",
        "🌸"
    ];

    heart.innerHTML =
    heartTypes[
    Math.floor(
    Math.random() *
    heartTypes.length
    )];

    heart.style.left =
    Math.random() * 100 + "%";

    heart.style.fontSize =
    (Math.random() * 20 + 15) + "px";

    heart.style.animationDuration =
    (Math.random() * 5 + 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

/* =========================
   TYPING LETTER
========================= */

const startLetterBtn =
document.getElementById("startLetterBtn");

const typedLetter =
document.getElementById("typedLetter");

const letterText = `Selamat ulang tahun ke-29 mbak Indri.

Semoga setiap langkah yang mbak ambil membawa kebahagiaan, kesehatan, rezeki, dan kesuksesan.

Terima kasih telah menjadi sosok yang kuat, baik hati, dan selalu memberi inspirasi.

Semoga semua impian mbak perlahan menjadi nyata.

Selamat menikmati hari spesial ini.

🎉🎂✨`;

let typingStarted = false;

if(startLetterBtn && typedLetter){

    startLetterBtn.addEventListener("click", () => {

        if(typingStarted) return;

        typingStarted = true;

        startLetterBtn.style.display = "none";

        let i = 0;

        function typeLetter(){

            if(i < letterText.length){

                typedLetter.innerHTML +=
                letterText.charAt(i);

                i++;

                setTimeout(typeLetter, 35);

            }

        }

        typeLetter();

    });

}