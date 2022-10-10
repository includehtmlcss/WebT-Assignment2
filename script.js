const books = [
    {
        id: 1,
        name: "Do Epic Shit",
        price: 299,
        rating: 4.5,
        image: "Do Epic Shit.jpg",
        description: "This is a book to be read, and reread, a book whose lines you will underline and think about again and again."
    },
    {
        id: 2,
        name: "The Alchemist",
        price: 399,
        rating: 4.5,
        image: "The Alchemist.png",
        description: "Coelho's masterpiece tells the mystical story of Santiago, who yearns to travel in search of a worldly treasure."
    },
    {
        id: 3,
        name: "Ikigai",
        price: 199,
        rating: 4.5,
        image: "Ikigai.png",
        description: "Ikigai gently unlocks simple secrets we can all use to live long, meaningful, happy lives."
    },
    {
        id: 4,
        name: "The Midnight Library",
        price: 149,
        rating: 4.5,
        image: "The Midnight Library.png",
        description: "When Nora Seed finds herself in the Midnight Library, she has a chance to make things right."
    },
    {
        id: 5,
        name: "Think Like a Monk",
        price: 249,
        rating: 4.5,
        image: "Think Like a Monk.png",
        description: "Reveals how to overcome negative thoughts, and access the calm and purpose that lie within all of us."
    },
    {
        id: 6,
        name: "The Fault in Our Stars",
        price: 169,
        rating: 4.5,
        image: "The Fault in Our Stars.png",
        description: "This is a fabulous book about a young teenage girl who has been diagnosed with lung cancer."
    }
];

const showContent = document.querySelector(".cards");

window.addEventListener("DOMContentLoaded", function () {
    var content = [];
    books.map(item => {
        content.push(
            `<div class="card product">
        <div class="product-img">
            <img src="./${item.image}">
        </div>
        <div class="product-details-container">
            <div class="product-name">${item.name}</div>
            <div class="price-rating">
                <div class="product-price">
                    <i class="fa fa-rupee" style="margin-right: 0.5rem;"></i>
                    <p>${item.price}</p>
                </div>
                <div class="rating">
                    <p>Rating: ${item.rating}</p>
                    <i class="fa fa-star star"></i>
                </div>
            </div>
            <div class="product-desc">
                <p>${item.description}</p>
            </div>
        </div>
        <div class="submit-rating">
                        <p style="text-align: center; font-size: 0.9rem; margin-bottom: 0.8rem;">Rate this book:</p>
                        <div class="rating-btns-container">
                            <button class="rating-btn">1</button>
                            <button class="rating-btn">2</button>
                            <button class="rating-btn">3</button>
                            <button class="rating-btn">4</button>
                            <button class="rating-btn">5</button>
                        </div>
                    </div>
                    <div class="product-btn">
                        <button class="cart-btn">
                            <i class="fa-regular fa-circle-check"></i>
                            <p>Submit Rating</p>
                        </button>
                    </div>
        </div>`
        );
    });
    showContent.innerHTML = content.join("\n");
})