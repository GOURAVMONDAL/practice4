let p = document.querySelector(".my-para").textContent;

let splittedPara = p.split("");

let newPara = " ";

splittedPara.forEach(function (item) {
  newPara += `<span>${item}</span>`;
});

document.querySelector(".my-para").innerHTML = newPara;

gsap.to(".page2 p span", {
  color: "royalblue",
  opacity: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    scrub: 4,
    start: "top 50%",
    end: "top -30%",
    // markers: true,
  },
});
