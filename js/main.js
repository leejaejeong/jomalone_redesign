$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger); // 스크롤 트리거와 타임라인을 사용하기 위해서 필요함 

    // ! wsss tit txt
    gsap.from(".sec_tit h2", {
        scrollTrigger: {
            trigger: ".sec_tit h2", // 타겟의 위치 
            start: "0% 100%", // 스크롤의 기준좀과 타겟의 이벤트실행 기준점 위치를 설정 
        },
        y: 200,
        duration: 1,
    })

    gsap.from(".sec_tit h3", {
        scrollTrigger: {
            trigger: ".sec_tit h3",
            start: "0% 100%",
        },
        y: 200,
        delay: 0.3,
        duration: 1,
    })

    // ! main cologne img
    var cologneImg = gsap
        .timeline({
            scrollTrigger: {
                trigger: ".purchase_container .img_box img",
                start: "0% 100%",
                end: "middle center",
                scrub: true
            }
        })
        .from(".purchase_container .img_box img", {
            scale: 0.5,
            duration: 1,
        });

    // ! wsss banner txt 
    gsap.from(".wsss_bnr p", {
        scrollTrigger: {
            trigger: ".wsss_bnr p",
            start: "0% 100%",
        },
        y: 200,
        duration: 1,
    })

    // ! wsss fragrance note tit
    var fragranceNote01 = gsap
        .timeline({
            scrollTrigger: {
                trigger: ".top_note_container h2",
                start: "0% 60%",
                end: "+=150",
                scrub: 3,
            }
        })
    fragranceNote01.fromTo(".top_note_container h2", {
        y: -150,
        opacity:1,
    }, {
        y: 150,
        opacity:0.5,
        duration: 1,
    });
    fragranceNote01.fromTo(".top_note_container .illust_img_box", {
        opacity: 0,
    }, {
        opacity: 1,
        y: -30,
        duration: 1,
    })

    var fragranceNote02 = gsap
        .timeline({
            scrollTrigger: {
                trigger: ".heart_note_container h2",
                start: "0% 20%",
                end: "+=150",
                scrub: 3,
            }
        })
    fragranceNote02.fromTo(".heart_note_container h2", {
        y: -150,
        opacity:1,
    }, {
        y: 150,
        opacity:0.5,
        duration: 1,
    });
    fragranceNote02.fromTo(".heart_note_container .illust_img_box", {
        opacity: 0,
    }, {
        opacity: 1,
        y: -30,
        duration: 1,
    })

    var fragranceNote03 = gsap
        .timeline({
            scrollTrigger: {
                trigger: ".base_note_container h2",
                start: "0% 20%",
                end: "+=150",
                scrub: 3,
            }
        })
    fragranceNote03.fromTo(".base_note_container h2", {
        y: -150,
        opacity:1,
    }, {
        y: 150,
        opacity:0.5,
        duration: 1,
    });
    fragranceNote03.fromTo(".base_note_container .illust_img_box", {
        opacity: 0,
    }, {
        opacity: 1,
        y: -30,
    })
})