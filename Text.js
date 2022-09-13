// DEPENDENCY
// https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js
// ,https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js
// ID: cvb_card
// Label: Z-Card

const visObject = {
  options: {
    image_html_url: {
      type: "string",
      display: "text",
      label: "01. Image URL",
      default: ""
    },
    card_title: {
      type: "string",
      display: "text",
      label: "02. Card Title",
      default: "Card Title"
        },
     stroke: {
      section: "card_title",
      type: "array",
      label: "Stroke color",
      display: "color",
      default: ["#353b49"]
    }
 },
    card_subtitle: {
      type: "string",
      display: "text",
      label: "03. Card Subtitle",
      default: "Card Subtitle"
    },
    card_information: {
      type: "string",
      display: "text",
      label: "04. Card Information",
      default: "a brown fox jumps over the lazy dog"
    },
  },
  create: function (element, config) {
    element.innerHTML = `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <style>
      //ANCHOR: define your CSS style here
      .card {
        border: 1px solid red;
      }
      
      .card-title {
        font-size: 18px;
      }
      
      .card-text {
        font-size: 12px;
      
      }
      
      .btn {
        background-color: #1ed760 !important;
        border: none;
        color: #000000 !important;
        font-size: 1rem;
        font-weight: 700;
        border-radius: 500px;
      }
      .card-img-top {
        // width: 50%;
        // height: 50%;
        // position:absolute;
        // clip:rect(0,200px,300px,0);
        max-width: 100%;
        height: auto;
        object-fit: cover;
      }
      </style>
      <div class="card" style="">
        <img id="card-image" src="" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 id="card-title" class="card-title"></h5>
          <h6 id="card-subtitle" class="card-subtitle mb-2 text-muted"></h6>
          <p id="card-information" class="card-text"></p>
          <a id="card-link" href="" class="card-link"></a>
        </div>
      </div>
      `;
  },
  updateAsync: function (
    data,
    element,
    config,
    queryResponse,
    details,
    done
  ) {
    // Error Handling
    // Clear any errors from previous updates.
    this.clearErrors();

    // https://tva1.sinaimg.cn/large/e6c9d24egy1h5ypqy1ucvj210q0u0juj.jpg
    var cardImage = document.getElementById("card-image")
    cardImage.src = config.image_html_url||""
    
    var cardTitle = document.getElementById("card-title")
    cardTitle.innerHTML = config.card_title||""
    
    var cardSubtitle = document.getElementById("card-subtitle")
    cardSubtitle.innerHTML = config.card_subtitle||""
    
    var cardInformation = document.getElementById("card-information")
    cardInformation.innerHTML = config.card_information||""
    
    done();
  },
};

looker.plugins.visualizations.add(visObject);
