/* =========================
   COUNTER ANIMATION
========================= */

const counters =
document.querySelectorAll(".stat-card h2");

const statsSection =
document.querySelector(".stats");

let started = false;

function runCounterAnimation(){

    if(started) return;

    const sectionTop =
    statsSection.getBoundingClientRect().top;

    const triggerPoint =
    window.innerHeight - 100;

    if(sectionTop < triggerPoint){

        started = true;

        counters.forEach(counter => {

            const target =
            Number(counter.dataset.target);

            const suffix =
            counter.dataset.suffix;

            let current = 0;

            const increment =
            Math.ceil(target / 120);

            function updateCounter(){

                current += increment;

                if(current >= target){

                    current = target;

                }

                counter.innerText =
                current + suffix;

                if(current < target){

                    requestAnimationFrame(updateCounter);

                }

            }

            updateCounter();

        });

    }

}

/* START ONLY ON SCROLL */

window.addEventListener(
    "scroll",
    runCounterAnimation
);
/* =========================
   SCROLL PROGRESS BAR
========================= */

window.addEventListener("scroll", () => {

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const scrollPercent =
    (scrollTop / scrollHeight) * 100;

    document.querySelector(
        ".scroll-progress"
    ).style.width =

    scrollPercent + "%";

    

});