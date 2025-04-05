const news = [
    {
      headline: "Noua generație de procesoare Intel lansează performanțe îmbunătățite",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.idownloadblog.com%2Fwp-content%2Fuploads%2F2017%2F05%2FIntel-Core-X-i9-chip.jpg&f=1&nofb=1&ipt=3728a83460b1eca90a38eee90cc887343d6bd50fc20edfce358e3d92242501bf&ipo=images",
      description: "Intel a dezvăluit seria sa de procesoare de ultimă generație, oferind o creștere semnificativă a performanței și eficienței."
    },
    {
      headline: "NVIDIA anunță noua serie de plăci video GeForce RTX 40xx",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsm.ign.com%2Fign_es%2Fphoto%2Fn%2Fnvidia-gef%2Fnvidia-geforce-rtx-4080-16gb-founders-edition-review_grmx.jpg&f=1&nofb=1&ipt=21ad417dd206749f5fa6df265f0ce63ae567a6bce5714615fedee75a73d4ba15&ipo=images",
      description: "NVIDIA a dezvăluit o nouă serie de plăci video GeForce RTX, promițând o grafică revoluționară și performanțe uluitoare în gaming."
    },
    {
      headline: "PC-uri personalizate de înaltă performanță - tendința din 2024",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvoltcave.com%2Fwp-content%2Fuploads%2F2020%2F04%2Frobeytech-senna-featured-image.jpg&f=1&nofb=1&ipt=40f6cf1b47eb40a6b450491251e751061e2e28593d10aa6fe9e10d95de778fd9&ipo=images",
      description: "Datorită cererii crescute pentru gaming și lucrul de acasă, PC-urile personalizate cu componente de top devin din ce în ce mai populare."
    },
    {
      headline: "AMD dezvăluie planuri pentru o nouă serie de procesoare Ryzen",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2FW16Yj41BBJbQua2edPf36wvXwIpTh8FFgyzGjbxImZg.jpg%3Fauto%3Dwebp%26s%3Da7910f236b337b99874ee5f920c7c9fdd8428e44&f=1&nofb=1&ipt=d9072ce8cdf7cf32563d2ef6881787b40803b21fcd688b7eb3412dd7776e3d4a&ipo=images",
      description: "AMD pregătește lansarea unei noi serii de procesoare Ryzen, promițând performanță și eficiență îmbunătățite pentru utilizatorii de PC."
    },
    {
      headline: "Tehnologia SSD revoluționează stocarea de date în PC-uri",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2022%2F11%2FClient-Products-Hero.jpg&f=1&nofb=1&ipt=bec137686f400751eed8d85501ba18cd7c069abc9f743cc7b7e33112ed7b9b38&ipo=images",
      description: "SSD-urile au devenit o alegere populară pentru stocarea de date în PC-uri, oferind viteze de citire și scriere impresionante față de HDD-uri tradiționale."
    }
  ];

  document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById("news-container");
    news.forEach(item => {
      const newsItem = document.createElement("div");
      newsItem.classList.add("news-item");
      newsItem.innerHTML = `
        <img src="${item.image}" alt="${item.headline}">
        <h2>${item.headline}</h2>
        <p>${item.description}</p>
      `;
      newsContainer.appendChild(newsItem);
    });

   
    const additionalNews = [
      {
        headline: "Noua placă video AMD Radeon RX 7000 promite performanțe excepționale",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.techadvisor.com%2Fwp-content%2Fuploads%2F2022%2F11%2FAMD-Radeon-RX-7000-Series-news-1.jpeg%3Fquality%3D50%26strip%3Dall&f=1&nofb=1&ipt=268534fb85e79eb789be4677a1139ca5958f9fde9277c7a31b8d49191917817b&ipo=images",
        description: "AMD a anunțat lansarea noii serii de plăci video Radeon RX 7000, care promite performanțe impresionante și suport pentru tehnologiile de ultimă generație."
      },
      {
        headline: "Cererea pentru procesoarele Apple M2 crește odată cu lansarea noilor MacBook-uri",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic2.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2021%2F04%2Fmacbook-pro-16-apple-m2.jpg&f=1&nofb=1&ipt=7a860d4c84cc29e07a164486b3200907151fd2a574163305871cdf7bd74672cb&ipo=images",
        description: "Odată cu lansarea noilor MacBook-uri echipate cu procesoare Apple M2, cererea pentru aceste procesoare a crescut semnificativ, datorită performanței și eficienței lor."
      },
      {
        headline: "Tendințe în tehnologiile de răcire pentru PC-uri - ceață lichidă și soluții pasive",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fperformancepsu.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fbudget-water-cooling-setup-1200x675.jpg&f=1&nofb=1&ipt=609a244d377695ff605f8940ac282695d95723189778b1eaabd59fedaed0fbfc&ipo=images",
        description: "În 2024, tendințele în tehnologiile de răcire pentru PC-uri includ soluții inovatoare precum ceața lichidă și soluții pasive, pentru o performanță și un zgomot reduse."
      }
    ];

    additionalNews.forEach(item => {
      const newsItem = document.createElement("div");
      newsItem.classList.add("news-item");
      newsItem.innerHTML = `
        <img src="${item.image}" alt="${item.headline}">
        <h2>${item.headline}</h2>
        <p>${item.description}</p>
      `;
      newsContainer.appendChild(newsItem);
    });
  });
