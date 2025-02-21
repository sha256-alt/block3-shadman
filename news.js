document.addEventListener("DOMContentLoaded", function() {

    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get("id");

    const newsData = {
        "news1": {
            title: "Microsoft in talks to buy TikTok, Trump says",
            image: "image1-jpg.webp",
            content: "US President Donald Trump has said Microsoft is in discussions to acquire TikTok and that he would like to see a bidding war over the sale of the social media app. When asked by reporters whether the US tech giant was preparing a bid, Trump replied: 'I would say yes'—before adding that there was great interest in TikTok from several companies. Both Trump and his predecessor Joe Biden have been trying for years to force TikTok's Chinese parent company, ByteDance, to sell its US operations on national security grounds."
        },
        "news2": {
            title: "DeepSeek vs ChatGPT - how do they compare?",
            image: "image2.jpg.webp",
            content: "The emergence of Chinese AI app DeepSeek has shocked financial markets, and prompted US President Donald Trump to describe it as a wake-up call for the US tech industry. DeepSeek's claim that its R1 artificial intelligence (AI) model was made at a fraction of the cost of its rivals has raised questions about the future of the industry and caused some of the world's biggest companies to sink in value."
        },
        "news3": {
            title: "OpenAI says Chinese rivals using its work for their AI apps",
            image: "image3.jpg.webp",
            content: "The maker of ChatGPT, OpenAI, has complained that rivals, including those in China, are using its work to make rapid advances in developing their own artificial intelligence (AI) tools. The status of OpenAI—and other US firms—as world leaders in AI has been dramatically undermined this week by the sudden emergence of DeepSeek, a Chinese app that can emulate the performance of ChatGPT, apparently at a fraction of the cost. Bloomberg has reported that Microsoft is investigating whether data belonging to OpenAI—of which it is a major investor—has been used in an unauthorized way."
        },
        "news4": {
            title: "Be careful with DeepSeek, Australia says - so is it safe to use?",
            image: "australkia.jpg",
            content: "Australia's science minister, Ed Husic, has become the first member of a Western government to raise privacy concerns about DeepSeek, the Chinese chatbot causing turmoil on the markets and in the tech industry."
        },
        "news5": {
            title: "Satellites could end UK phone 'not spots', Vodafone says",
            image: "voda.jpg",
            content: "Vodafone has carried out what it says is the UK's first satellite-enabled smartphone video call. The company says the call - made from a mountain in Ceredigion, west Wales - is part of the process of adding satellite connectivity to its UK phone network by the end of the year, and across Europe in 2026."
        },
        "news6": {
            title: "Tech Decoded: The latest technology news direct to your inbox",
            image: "bitpng.webp",
            content: "The tech industry possesses enormous power and influence, touching almost every aspect of our lives, from the way we work and shop, to the way we communicate and travel. Understanding the industry is not only vital to making sense of the world we live in but also the one we will inhabit tomorrow. Yet it can be hard to tell the signal from the noise, given the sheer volume of technology news out there and the complexity of the topic."
        },
        "news7": {
            title: "Mexico asks Google Maps not to rename Gulf of Mexico",
            image: "location.jpg",
            content: "Mexican President Claudia Sheinbaum has written a letter to Google asking the firm to reconsider its decision to rename the Gulf of Mexico. US President Donald Trump signed an executive order requiring the body of water - which is bordered by the US, Cuba and Mexico - be renamed the Gulf of America in his first week in office."
        },
        "news8": {
            title: "Musk, MrBeast, Larry Ellison - Who might buy TikTok?",
            image: "elonma.jpg",
            content: "Jimmy Donaldson - aka MrBeast - was jubilant as he told his tens of millions of TikTok followers about his bid to buy the platform. I might become you guys new CEO! I m super excited! Donaldson said from a private jet. He then proceeded to promise $10,000 to five random new followers."
        },
        "news9": {
            title: "Garmin users say smartwatches have stopped working",
            image: "watch.png",
            content: "Smartwatch firm Garmin is facing a backlash after customers around the world complained their devices were not working. Some users reported seeing a blue triangle when they tried to turn on their watch, while others were stuck on its start-up screen. Garmin's Fenix 8 smartwatches, which retail for just under £1,000 ($1,200), are some of the devices to have issues - however not all watches are affected by the outage."
        }
    };

    if (newsId in newsData) {
        document.getElementById("news-title").innerText = newsData[newsId].title;
        document.getElementById("news-image").src = newsData[newsId].image;
        document.getElementById("news-content").innerText = newsData[newsId].content;
    } else {
        document.getElementById("news-title").innerText = "News Not Found";
        document.getElementById("news-content").innerText = "Sorry, the news article you are looking for does not exist.";
    }
});

document.getElementById("news-image").addEventListener("click", function () {
    const imgPopup = document.createElement("div");
    imgPopup.style.position = "fixed";
    imgPopup.style.top = "0";
    imgPopup.style.left = "0";
    imgPopup.style.width = "100vw";
    imgPopup.style.height = "100vh";
    imgPopup.style.backgroundColor = "rgba(0,0,0,0.8)";
    imgPopup.style.display = "flex";
    imgPopup.style.justifyContent = "center";
    imgPopup.style.alignItems = "center";
    imgPopup.style.zIndex = "1000";

    const img = document.createElement("img");
    img.src = this.src;
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.border = "5px solid white";

    imgPopup.appendChild(img);
    document.body.appendChild(imgPopup);
    console.log("image clicked successufully");

    imgPopup.addEventListener("click", function () {
        document.body.removeChild(imgPopup);
    });
});



