AFRAME.registerComponent("info-banner", {
    schema:{
        itemId:{default:"", type:"string"},
    },
    update:function(){
        this.createBanner();
    },
    createBanner:function(){
        postersInfo = {
            superman:{
                banner_url:"comic1.png",
                title:"Superman",
                release_year:"1983",
                description:"Superman is an ongoing American comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics in June 1938. The strip proved so popular that National launched Superman into his own self-titled comic book, the first for any superhero, premiering with the cover date Summer 1939."
            },
            x_man:{
                banner_url:"comic2.png",
                title:"X-Man",
                release_year:"1975",
                description:"Giant-Size X-Men #1 was a special issue of the X-Men comic book series, published by Marvel Comics in 1975. It was written by Len Wein and illustrated by Dave Cockrum. Though not a regular issue, it contained the first new X-Men story in five years, titled Second Genesis.", 
            },
            spiderman: {
                banner_url:"comic3.png",
                title:"Spiderman",
                released_year:"1962",
                description:"Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the Silver Age of Comic Books.",
            },
            chacha_chaudary:{
                banner_url:"comic4.png",
                title:"ChaCha Chaudary",
                release_year:"1971",
                description:"Chacha Chaudhary is an Indian comic book character, created by cartoonist Pran Kumar Sharma. The comic comes in ten Indian languages including Hindi and English and has sold over ten million copies."
            }
        };
        const { itemId } = this.data;
        const fadeBackgroundEl = document.querySelector("fadeBackground");
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", false);
        entityEl.setAttribute("id", `${itemId}-banner`);
        entityEl.setAttribute("geometry", {
            primitive:"plane",
            width:0.9,
            height:1,
        });
        entityEl.setAttribute("material", {color:"#000"});
        entityEl.setAttribute("position", {x:0, y:0.1, z:-1});

        const item = postersInfo[itemId];

        const imageEl = this.createImageEl(item);
        const titleEl = this.createTitleEl(item);
        const descriptionEl = this.createDescriptionEl(item);

        entityEl.appendChild(imageEl);
        entityEl.appendChild(titleEl);
        entityEl.appendChild(descriptionEl);

        fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl:function(){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive:"plane", 
            width:0.85,
            height:0.4,
        });
        entityEl.setAttribute("material", {
            src:item.banner_url,
        });
        entityEl.setAttribute("position", {
            x:0,
            y:0.3,
            z:0.05,
        })
        return entityEl
    },
    createTitleEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
          shader: "msdf",
          anchor: "left",
          font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
          width: 1.2,
          height: 2,
          color: "#fff",
          value: `${item.title} (${item.released_year})`,
        });
        entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
        return entityEl;
      },
      createDescriptionEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
          shader: "msdf",
          anchor: "left",
          font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
          width: 0.75,
          height: 2,
          color: "#fff",
          wrapCount: "40",
          value: item.description,
        });
        entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
        return entityEl;
      },    
});