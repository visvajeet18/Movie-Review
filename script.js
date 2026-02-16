document.addEventListener('DOMContentLoaded', () => {
    try {
        // --- expanded Movie Data ---
        const movies = [
            // International Hits
            {
                id: 1,
                title: "Inception",
                genre: "Sci-Fi",
                language: "English",
                year: 2010,
                rating: 4.8,
                image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
                description: "A thief who steals corporate secrets through the use of dream-sharing technology."
            },
            {
                id: 2,
                title: "The Dark Knight",
                genre: "Action",
                language: "English",
                year: 2008,
                rating: 4.9,
                image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
                description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham."
            },
            {
                id: 3,
                title: "Interstellar",
                genre: "Sci-Fi",
                language: "English",
                year: 2014,
                rating: 4.7,
                image: "https://image.tmdb.org/t/p/w500/gEU2QniL6E8AHtMY4kOuxZnOleo.jpg",
                description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
            },
            {
                id: 4,
                title: "Parasite",
                genre: "Drama",
                language: "Korean",
                year: 2019,
                rating: 4.6,
                image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
                description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
            },
            {
                id: 5,
                title: "Avengers: Endgame",
                genre: "Action",
                language: "English",
                year: 2019,
                rating: 4.5,
                image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
                description: "After the devastating events of Infinity War, the universe is in ruins."
            },
            {
                id: 6,
                title: "The Godfather",
                genre: "Crime",
                language: "English",
                year: 1972,
                rating: 4.9,
                image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enUSpvz9hPRbv5Z.jpg",
                description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
            },
            {
                id: 17,
                title: "Pulp Fiction",
                genre: "Crime",
                language: "English",
                year: 1994,
                rating: 4.9,
                image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
                description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
            },
            {
                id: 18,
                title: "Fight Club",
                genre: "Drama",
                language: "English",
                year: 1999,
                rating: 4.8,
                image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7Qf4n6a8M9lQ.jpg",
                description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
            },
            {
                id: 19,
                title: "The Matrix",
                genre: "Sci-Fi",
                language: "English",
                year: 1999,
                rating: 4.9,
                image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
                description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
            },
            {
                id: 20,
                title: "The Return of the King",
                genre: "Fantasy",
                language: "English",
                year: 2003,
                rating: 5.0,
                image: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3vpX3uzwdcf9.jpg",
                description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
            },

            // Anime
            {
                id: 7,
                title: "Spirited Away",
                genre: "Anime",
                language: "Japanese",
                year: 2001,
                rating: 4.9,
                image: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUKGnSxQbYTl.jpg",
                description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits."
            },
            {
                id: 8,
                title: "Your Name",
                genre: "Anime",
                language: "Japanese",
                year: 2016,
                rating: 4.8,
                image: "https://image.tmdb.org/t/p/w500/glNzvArQV7T7Z4rfvDR0z2qW7I9.jpg",
                description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?"
            },
            {
                id: 50,
                title: "Akira",
                genre: "Anime",
                language: "Japanese",
                year: 1988,
                rating: 4.7,
                image: "https://image.tmdb.org/t/p/w500/neZ0UxArCpZIUuQkAPfPiv1Bny.jpg",
                description: "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath."
            },

            // Tamil / South Indian / Indian Hits
            {
                id: 26,
                title: "Leo",
                genre: "Action",
                language: "Tamil",
                year: 2023,
                rating: 4.2,
                image: "https://m.media-amazon.com/images/M/MV5BMjYyZTIyN2YtNzYyOC00YTYyLWE0YTItY2ExMWViODVkMjM3XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_.jpg",
                description: "Mild-mannered café owner Parthiban is pursued by gangsters who suspect him to be a former drug lord."
            },
            {
                id: 27,
                title: "Vikram",
                genre: "Action",
                language: "Tamil",
                year: 2022,
                rating: 4.6,
                image: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YTRhXkEyXkFqcGdeQXVyNCExMjk4Mzk@._V1_.jpg",
                description: "A special agent investigates a murder committed by a masked group of serial killers. A drug lord awaits."
            },
            {
                id: 28,
                title: "Jailer",
                genre: "Action",
                language: "Tamil",
                year: 2023,
                rating: 4.3,
                image: "https://m.media-amazon.com/images/M/MV5BNzQxYzE1MTEtZmI4My00ZGRjLTk1YjYtOTI4YjI2YjcyOTRiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
                description: "A retired jailer goes on a manhunt to find his son's killers."
            },
            {
                id: 29,
                title: "Kaithi",
                genre: "Action",
                language: "Tamil",
                year: 2019,
                rating: 4.8,
                image: "https://m.media-amazon.com/images/M/MV5BMTM3NjE4Njc1OV5BMl5BanBnXkFtZTgwNTU4NTU1MjE@._V1_.jpg",
                description: "A recently released prisoner races against time to drive poisoned cops to a hospital while gangsters chase him."
            },
            {
                id: 30,
                title: "Baahubali 2: The Conclusion",
                genre: "Action",
                language: "Telugu",
                year: 2017,
                rating: 4.8,
                image: "https://image.tmdb.org/t/p/w500/21sC2assIm2mtGJd43rqXLnZscn.jpg",
                description: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers."
            },
            {
                id: 31,
                title: "RRR",
                genre: "Action",
                language: "Telugu",
                year: 2022,
                rating: 4.6,
                image: "https://image.tmdb.org/t/p/w500/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg",
                description: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country."
            },
            {
                id: 32,
                title: "KGF: Chapter 2",
                genre: "Action",
                language: "Kannada",
                year: 2022,
                rating: 4.5,
                image: "https://image.tmdb.org/t/p/w500/kh4fcGJNS8Ba0qMcP4iVbb51Rz2.jpg",
                description: "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes."
            },
            {
                id: 33,
                title: "Kantara",
                genre: "Thriller",
                language: "Kannada",
                year: 2022,
                rating: 4.8,
                image: "https://image.tmdb.org/t/p/w500/vnXpM01tW32aQn4u2FSI5N3J34J.jpg",
                description: "When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors."
            },
            {
                id: 34,
                title: "Asuran",
                genre: "Drama",
                language: "Tamil",
                year: 2019,
                rating: 4.7,
                image: "https://m.media-amazon.com/images/M/MV5BYzA0Nzg0MDYtMzdhNS00YzYzLTk0ZGQtMWYxZTY2ZWM4NWRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                description: "The teenage son of a farmer from an underprivileged caste kills a rich, upper caste landlord."
            },
            {
                id: 35,
                title: "Vada Chennai",
                genre: "Crime",
                language: "Tamil",
                year: 2018,
                rating: 4.7,
                image: "https://m.media-amazon.com/images/M/MV5BMjA4NzUyNDk4NV5BMl5BanBnXkFtZTgwODk2NzM5NjE@._V1_.jpg",
                description: "A skilled carrom player steps into the world of crime and joins forces with local gangsters to settle their feuds."
            },
            {
                id: 36,
                title: "96",
                genre: "Romance",
                language: "Tamil",
                year: 2018,
                rating: 4.6,
                image: "https://image.tmdb.org/t/p/w500/1o8q2v7p8Q5j9w5f9x7z8k9j2.jpg",
                description: "Two high school sweethearts meet at a reunion after 22 years and remember their past."
            },
            {
                id: 37,
                title: "Ratsasan",
                genre: "Thriller",
                language: "Tamil",
                year: 2018,
                rating: 4.9,
                image: "https://m.media-amazon.com/images/M/MV5BNTI2OWU3YmEtM2LzZi00OGQ0NGFiNzctYmJlOTliMzVjYzViXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                description: "A sub-inspector sets out to track down a mysterious serial killer who targets teen school girls and murders them brutally."
            },
            {
                id: 38,
                title: "Thuppakki",
                genre: "Action",
                language: "Tamil",
                year: 2012,
                rating: 4.5,
                image: "https://m.media-amazon.com/images/M/MV5BZTc4YjJhYTYtMzY5YS00M2ViLWE2MzUtYTcwM2ZlY2RlYTc4XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_.jpg",
                description: "An army captain visits Mumbai to be with his family and find a suitable bride."
            },
            {
                id: 39,
                title: "Mankatha",
                genre: "Action",
                language: "Tamil",
                year: 2011,
                rating: 4.4,
                image: "https://m.media-amazon.com/images/M/MV5BODQ0N2Y3YmMtZWY5NS00ZGM2LWE1YzUtODllYTRmYzc0ZGE2XkEyXkFqcGdeQXVyODk1MzE5ODY@._V1_.jpg",
                description: "A suspended inspector Vinayak Mahadevan falls in love with the daughter of a powerful gangster."
            },
            {
                id: 40,
                title: "Sivaji: The Boss",
                genre: "Action",
                language: "Tamil",
                year: 2007,
                rating: 4.3,
                image: "https://m.media-amazon.com/images/M/MV5BYzExMGY2NDItZmE5NC00MzU4LWIwOGQtYzBmYTllNzY0OGY0XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
                description: "A software engineer arrives in India to serve the nation and invest in the people's welfare."
            },
            {
                id: 41,
                title: "Enthiran",
                genre: "Sci-Fi",
                language: "Tamil",
                year: 2010,
                rating: 4.3,
                image: "https://image.tmdb.org/t/p/w500/74205N4gQ2u4i3d5q78j7h6.jpg",
                description: "A brilliant scientist builds a humanoid robot to protect the mankind, but things go wrong when human emotions are programmed."
            },
            {
                id: 42,
                title: "Master",
                genre: "Action",
                language: "Tamil",
                year: 2021,
                rating: 4.0,
                image: "https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
                description: "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities."
            },
            {
                id: 43,
                title: "Soorarai Pottru",
                genre: "Drama",
                language: "Tamil",
                year: 2020,
                rating: 4.8,
                image: "https://m.media-amazon.com/images/M/MV5BOGJjMDM3ZGEtNDc3Yi00ZmU1LTg2ZGMtMTA3MGQ0ZWYwYmJlXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
                description: "Nedumaaran Rajangam sets out to make the common man fly and in the process takes on the world's most capital intensive industry."
            },
            {
                id: 44,
                title: "Jai Bhim",
                genre: "Drama",
                language: "Tamil",
                year: 2021,
                rating: 4.9,
                image: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg",
                description: "When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice."
            },
            {
                id: 45,
                title: "Karnan",
                genre: "Drama",
                language: "Tamil",
                year: 2021,
                rating: 4.6,
                image: "https://m.media-amazon.com/images/M/MV5BYjI1ODFhMTctNzM4MC00M2IwLWExMGMtZjY4ZWQ4Y2NhYjQ4XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
                description: "Karnan, a fearless village youth, must fight for the rights of the people of his village."
            },
            {
                id: 46,
                title: "Pushpa 2: The Rule",
                genre: "Action",
                language: "Telugu",
                year: 2024,
                rating: 4.5,
                image: "https://image.tmdb.org/t/p/w500/1QO0t9Hk3qc4l7Y1k8U2q7W9.jpg",
                description: "Pushpa Raj rules the smuggling syndicate, but old enemies and new threats challenge his reign."
            },
            {
                id: 47,
                title: "Manjummel Boys",
                genre: "Adventure",
                language: "Malayalam",
                year: 2024,
                rating: 4.7,
                image: "https://image.tmdb.org/t/p/w500/j9NfP0T4s9s0j3Cq0v6w5n2m8X0.jpg",
                description: "A group of friends gets into a daring rescue mission to save their friend from Guna Caves."
            },
            {
                id: 48,
                title: "Hanu-Man",
                genre: "Action",
                language: "Telugu",
                year: 2024,
                rating: 4.2,
                image: "https://image.tmdb.org/t/p/w500/kJxJGNKzH7sD4o8g6K1jE3r3tQ.jpg",
                description: "An imaginary place called Anjanadri where the protagonist gets the powers of Hanuman and fights for Anjanadri."
            },
            {
                id: 49,
                title: "3 Idiots",
                genre: "Comedy",
                language: "Hindi",
                year: 2009,
                rating: 4.9,
                image: "https://image.tmdb.org/t/p/w500/66A9MqXOyVh9URsAd9kU5DsjZ.jpg",
                description: "Two friends search for their long lost companion. They revisit their college days and recall the memories."
            },
            {
                id: 51,
                title: "Kalki 2898 AD",
                genre: "Sci-Fi",
                language: "Telugu",
                year: 2024,
                rating: 4.6,
                image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kalki_2898_AD.jpg",
                description: "A modern-day avatar of Vishnu, a Hindu god, who is believed to have descended to earth to protect the world from evil forces."
            },
            {
                id: 52,
                title: "The Greatest of All Time",
                genre: "Action",
                language: "Tamil",
                year: 2024,
                rating: 4.3,
                image: "https://m.media-amazon.com/images/M/MV5BNTI4YjM3ZYtMTAzMy00M2E1LTk2YzctOTE3NDYxNzY1NzY1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
                description: "A special anti-terrorist squad leader is haunted by the death of his son, and years later, his past comes back to haunt him."
            },
            {
                id: 53,
                title: "Amaran",
                genre: "Biographical",
                language: "Tamil",
                year: 2024,
                rating: 4.8,
                image: "https://upload.wikimedia.org/wikipedia/en/b/b2/Amaran_2024_poster.jpg",
                description: "The life of Major Mukund Varadarajan and his heroism in the Indian Army."
            },
            {
                id: 54,
                title: "Salaar: Part 1 – Ceasefire",
                genre: "Action",
                language: "Telugu",
                year: 2023,
                rating: 4.5,
                image: "https://upload.wikimedia.org/wikipedia/en/a/a2/Salaar_Part_1_–_Ceasefire.jpg",
                description: "A gang leader tries to keep a promise made to his dying friend and takes on the other criminal gangs."
            },
            {
                id: 55,
                title: "Maharaja",
                genre: "Thriller",
                language: "Tamil",
                year: 2024,
                rating: 4.8,
                image: "https://m.media-amazon.com/images/M/MV5BNzQ2YzczMDEtYWY3Ny00YmY5LTg4MDYtYmQ3ODdiY2FhY2FhXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
                description: "A barber seeks vengeance after his home is burglarized, cryptically telling police his 'Lakshmi' has been taken."
            },
            {
                id: 56,
                title: "Raayan",
                genre: "Action",
                language: "Tamil",
                year: 2024,
                rating: 4.4,
                image: "https://m.media-amazon.com/images/M/MV5BMjA5OTEwMGMtM2I5ZC00MTY2LWEwOGMtN2I5OTEwMGMtM2I5ZC00MTY2LWEwOGMt._V1_.jpg",
                description: "A young man gets pulled into the world of crime in North Chennai."
            },
            {
                id: 57,
                title: "Premam",
                genre: "Romance",
                language: "Malayalam",
                year: 2015,
                rating: 4.9,
                image: "https://m.media-amazon.com/images/M/MV5BMzY5NTdjMDMtZDY1My00NjcyLThiZGMtYjgwNzFjZGYxM2I5XkEyXkFqcGdeQXVyMjkxNzQ1NjI@._V1_.jpg",
                description: "George, a teenager, loves Malar. But his romantic journey takes him through several stages, helping him find his purpose."
            },
            {
                id: 58,
                title: "Drishyam 2",
                genre: "Thriller",
                language: "Malayalam",
                year: 2021,
                rating: 4.8,
                image: "https://upload.wikimedia.org/wikipedia/en/d/dc/Drishyam_2.jpg",
                description: "A gripping tale of an investigation and a family which is threatened by it. Will Georgekutty be able to protect his family this time?"
            },
            {
                id: 59,
                title: "Dangal",
                genre: "Drama",
                language: "Hindi",
                year: 2016,
                rating: 4.9,
                image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
                description: "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression."
            }
        ];

        // --- DOM Elements ---
        const trendingGrid = document.getElementById('trending-grid');
        const movieGrid = document.getElementById('movie-grid');
        const topRatedGrid = document.getElementById('top-rated-grid');
        const watchlistGrid = document.getElementById('watchlist-grid');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const searchInput = document.getElementById('search-input');

        // Review Elements
        const reviewForm = document.getElementById('review-form');
        const reviewsList = document.getElementById('reviews-list');
        const movieSelect = document.getElementById('movie-select');
        const starInput = document.getElementById('rating-input');
        const stars = document.querySelectorAll('.star-rating span');

        // --- Helper Functions ---

        // Watchlist Logic
        function getWatchlist() {
            return JSON.parse(localStorage.getItem('cinescope_watchlist')) || [];
        }

        function toggleWatchlist(id) {
            let list = getWatchlist();
            if (list.includes(id)) {
                list = list.filter(itemId => itemId !== id);
            } else {
                list.push(id);
            }
            localStorage.setItem('cinescope_watchlist', JSON.stringify(list));

            // Re-render if on specific pages to update UI immediately
            if (movieGrid) {
                // Determine current filter/search state to re-render correctly
                // For simplicity, just re-trigger the current search/filter or just update the specific button class
                const btn = document.querySelector(`.watchlist-btn[data-id="${id}"]`);
                if (btn) {
                    btn.classList.toggle('active');
                    btn.innerHTML = list.includes(id) ? '♥' : '♡';
                }
            }
            if (watchlistGrid) {
                renderWatchlist();
            }
        }

        /**
         * Creates a standard movie card element
         */
        const createMovieCard = (movie, rank = null) => {
            const card = document.createElement('div');
            card.classList.add('movie-card');

            let rankBadge = '';
            if (rank) {
                rankBadge = `<div style="position: absolute; top: 10px; left: 10px; background: var(--primary-color); color: #240046; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; z-index: 2; border: 2px solid #fff; box-shadow: 0 0 5px rgba(0,0,0,0.5);">${rank}</div>`;
            }

            const watchlist = getWatchlist();
            const isSaved = watchlist.includes(movie.id);
            const heartIcon = isSaved ? '♥' : '♡';
            const activeClass = isSaved ? 'active' : '';

            card.innerHTML = `
            ${rankBadge}
            <button class="watchlist-btn ${activeClass}" data-id="${movie.id}" style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.6); border: none; color: ${isSaved ? '#ff4757' : '#fff'}; font-size: 1.5rem; cursor: pointer; z-index: 10; border-radius: 50%; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; transition: all 0.2s;">
                ${heartIcon}
            </button>
            <img src="${movie.image}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="rating">★ ${movie.rating}</span>
                </div>
                <p style="font-size: 0.85rem; color: #aaa;">${movie.genre}</p>
            </div>
        `;

            // Add event listener to the heart button
            const btn = card.querySelector('.watchlist-btn');
            btn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent triggering card click if we had one
                toggleWatchlist(movie.id);
                // Update visual state immediately
                const currentlySaved = getWatchlist().includes(movie.id);
                btn.innerHTML = currentlySaved ? '♥' : '♡';
                btn.style.color = currentlySaved ? '#ff4757' : '#fff';
            });

            return card;
        };

        /**
         * Renders a list of movies to a container
         */
        function renderMovies(movieList, container, withRank = false) {
            container.innerHTML = '';
            if (movieList.length === 0) {
                container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #888;">No movies found.</p>';
                return;
            }

            movieList.forEach((movie, index) => {
                const card = createMovieCard(movie, withRank ? index + 1 : null);
                // Add animation delay for stagger effect
                card.style.animation = `fadeIn 0.5s ease forwards ${index * 0.05}s`;
                card.style.opacity = '0';
                container.appendChild(card);
            });
        }

        // --- Page Logic ---

        // 1. Home Page (Trending)
        if (trendingGrid) {
            // Show mix of popular movies, prioritizing new ones (ID > 25)
            const newReleases = movies.filter(m => m.id > 25);
            const others = movies.filter(m => m.id <= 25);

            // Shuffle both
            const shuffledNew = [...newReleases].sort(() => 0.5 - Math.random());
            const shuffledOthers = [...others].sort(() => 0.5 - Math.random());

            // Combine: 3 New + 1 Other
            const trending = [...shuffledNew.slice(0, 3), ...shuffledOthers.slice(0, 1)];
            renderMovies(trending, trendingGrid);
        }

        // 2. Movies Page (All Movies + Search)
        if (movieGrid) {
            renderMovies(movies, movieGrid);

            // Filter Buttons
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    const genre = btn.dataset.genre;
                    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

                    filterAndRender(genre, searchTerm);
                });
            });

            // Search Input
            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
                    const searchTerm = e.target.value.toLowerCase();
                    const activeBtn = document.querySelector('.filter-btn.active');
                    const genre = activeBtn ? activeBtn.dataset.genre : 'All';

                    filterAndRender(genre, searchTerm);
                });
            }

            function filterAndRender(genre, searchTerm) {
                let filtered = movies;

                // Filter by Genre or Language
                if (genre !== 'All') {
                    filtered = filtered.filter(m => {
                        // Check if filter is a genre match or a language match
                        const genreMatch = (m.genre === genre || (genre === 'Anime' && m.genre === 'Anime'));
                        const langMatch = (m.language === genre); // Use 'genre' var as it holds the button value
                        return genreMatch || langMatch;
                    });
                }

                // Filter by Search
                if (searchTerm) {
                    filtered = filtered.filter(m => m.title.toLowerCase().includes(searchTerm));
                }

                renderMovies(filtered, movieGrid);
            }
        }

        // 3. Top Rated Page
        if (topRatedGrid) {
            const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
            renderMovies(sortedMovies, topRatedGrid, true);
        }

        // 4. Watchlist Page
        if (watchlistGrid) {
            renderWatchlist();
        }

        function renderWatchlist() {
            if (!watchlistGrid) return;

            const list = getWatchlist();
            if (list.length === 0) {
                watchlistGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #ccc; font-size: 1.2rem;">Your watchlist is currently empty.</p>';
                return;
            }

            const watchlistMovies = movies.filter(m => list.includes(m.id));
            renderMovies(watchlistMovies, watchlistGrid);
        }

        // 4. Reviews Page with Local Storage
        if (reviewsList) {

            // Populate Select Dropdown
            if (movieSelect) {
                // Sort movies alphabetically for easier finding
                const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
                sortedMovies.forEach(movie => {
                    const option = document.createElement('option');
                    option.value = movie.title;
                    option.textContent = movie.title;
                    movieSelect.appendChild(option);
                });
            }

            // Star Rating Capability
            if (stars.length > 0) {
                stars.forEach(star => {
                    star.addEventListener('click', () => {
                        const value = star.dataset.value;
                        starInput.value = value;
                        updateStars(value);
                    });
                });
            }

            function updateStars(value) {
                stars.forEach(s => {
                    if (parseInt(s.dataset.value) <= parseInt(value)) {
                        s.classList.add('filled');
                    } else {
                        s.classList.remove('filled');
                    }
                });
            }

            // Load Reviews from LocalStorage
            loadReviews();

            // Handle Review Submission
            if (reviewForm) {
                reviewForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const movieTitle = movieSelect.value;
                    const rating = starInput.value;
                    const text = document.getElementById('review-text').value;

                    if (!rating) {
                        alert('Please select a rating!');
                        return;
                    }

                    // Create Review Review
                    addReview(movieTitle, rating, text);
                    saveReview(movieTitle, rating, text);

                    // Reset Form
                    reviewForm.reset();
                    updateStars(0);
                });
            }
        }

        // Functions for Reviews
        function addReview(title, rating, text, isPrepend = true) {
            if (!reviewsList) return;

            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');
            reviewItem.innerHTML = `
            <div class="review-header">
                <span class="review-movie-title">${title}</span>
                <span class="rating" style="color: var(--secondary-color);">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</span>
            </div>
            <p class="review-text">${text}</p>
        `;

            if (isPrepend) {
                reviewsList.prepend(reviewItem);
            } else {
                reviewsList.appendChild(reviewItem);
            }
        }

        function saveReview(title, rating, text) {
            const newReview = { title, rating, text, date: new Date().toISOString() };
            let reviews = JSON.parse(localStorage.getItem('cinescope_reviews')) || [];
            reviews.unshift(newReview); // Add to beginning
            localStorage.setItem('cinescope_reviews', JSON.stringify(reviews));
        }

        function loadReviews() {
            if (!reviewsList) return;

            let reviews = JSON.parse(localStorage.getItem('cinescope_reviews')) || [];

            // If no reviews exist, add some defaults and save them (optional, but good for demo)
            if (reviews.length === 0) {
                const defaultReviews = [
                    { title: "Inception", rating: 5, text: "Mind-blowing visuals and story! A must watch." },
                    { title: "Spirited Away", rating: 5, text: "A masterpiece of animation. Ghibli magic at its finest." },
                    { title: "Parasite", rating: 4, text: "A very interesting take on society and class struggle." }
                ];
                // Don't save defaults to user storage to keep it clean, just show them? 
                // Better to show defaults if empty, but not save them so we don't pollute storage.
                // But user asked to "store user review in one page", so let's just display defaults if nothing is there.

                defaultReviews.forEach(r => addReview(r.title, r.rating, r.text, false)); // Append defaults
            } else {
                reviews.forEach(r => addReview(r.title, r.rating, r.text, false)); // Append stored reviews
            }
        }

        // 5. Trailers Page logic
        const trailerGrid = document.getElementById('trailer-grid');
        if (trailerGrid) {
            trailerGrid.innerHTML = '';

            // Map of known YouTube IDs for our top movies
            const trailerMap = {
                "Inception": "YoHD9XEInc0",
                "The Dark Knight": "EXeTwQWrcwY",
                "Interstellar": "zSWdZVtXT7E",
                "Parasite": "5xH0HfJHsaY",
                "Avengers: Endgame": "TcMBFSGVi1c",
                "The Godfather": "sY1S34973zA",
                "Spirited Away": "ByXuk9QqQkk",
                "Your Name": "xU47nhruN-Q",
                "Akira": "SfTfXLLJqeM",
                "Seven Samurai": "wJ1TOratDYo",
                "My Neighbor Totoro": "92a7Hj0ijLs",
                "Princess Mononoke": "4OiMOHRDs14",
                "Godzilla": "ICp4g9p_r_I", // 1954
                "Battle Royale": "N0p1t-dC7Ko",
                "Train to Busan": "pyWuHv2-Abk",
                "Oldboy": "2HkjrJ6IK5E",
                "Pulp Fiction": "s7EdQ4FqbhY",
                "Fight Club": "qtRKdVHc-cE",
                "The Matrix": "vKQi3bBA1y8",
                "The Return of the King": "r5X-hFf6Bwo",
                "Forrest Gump": "bLvqoHBptjg",
                "Gladiator": "P5ieIbInFpg",
                "The Silence of the Lambs": "W6Mm8ZdQqiU",
                "Schindler's List": "gG22XNhtnoY",
                "The Shawshank Redemption": "PLl99DlL6b4"
            };

            // Render Trailers
            movies.forEach(movie => {
                const trailerId = trailerMap[movie.title];

                const card = document.createElement('div');
                card.classList.add('trailer-card');

                let content = '';

                if (trailerId) {
                    // If we have a real ID, embed it
                    content = `
                    <div class="trailer-container">
                        <iframe src="https://www.youtube.com/embed/${trailerId}" allowfullscreen loading="lazy"></iframe>
                    </div>
                `;
                } else {
                    // Fallback to a placeholder that links to search
                    content = `
                    <div class="trailer-container" style="background: #000; display: flex; align-items: center; justify-content: center;">
                        <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' trailer')}" target="_blank" style="color: #fff; text-decoration: none; display: flex; flex-direction: column; align-items: center;">
                            <span style="font-size: 3rem;">▶</span>
                            <span style="margin-top: 1rem;">Watch Trailer on YouTube</span>
                        </a>
                    </div>
                `;
                }

                card.innerHTML = `
                ${content}
                <div class="trailer-info">
                    <h3 class="trailer-title">${movie.title}</h3>
                </div>
            `;

                trailerGrid.appendChild(card);
            });
        }

        // 6. Contact Form Validation
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const name = document.getElementById('name');
                const email = document.getElementById('email');
                const message = document.getElementById('message');
                const successMsg = document.getElementById('success-message');

                let isValid = true;

                // Simple Validation
                if (name.value.trim().length < 2) {
                    showError('name-error', 'Name must be at least 2 characters.');
                    isValid = false;
                } else {
                    clearError('name-error');
                }

                if (!isValidEmail(email.value)) {
                    showError('email-error', 'Please enter a valid email address.');
                    isValid = false;
                } else {
                    clearError('email-error');
                }

                if (message.value.trim().length < 10) {
                    showError('message-error', 'Message must be at least 10 characters.');
                    isValid = false;
                } else {
                    clearError('message-error');
                }

                if (isValid) {
                    // Simulate sending
                    const btn = contactForm.querySelector('button');
                    const originalText = btn.textContent;
                    btn.textContent = 'Sending...';
                    btn.disabled = true;

                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                        contactForm.reset();
                        successMsg.style.display = 'block';

                        // Hide success message after 3 seconds
                        setTimeout(() => {
                            successMsg.style.display = 'none';
                        }, 5000);
                    }, 1500);
                }
            });
        }

        function showError(id, message) {
            const el = document.getElementById(id);
            if (el) el.textContent = message;
        }

        function clearError(id) {
            const el = document.getElementById(id);
            if (el) el.textContent = '';
        }

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
    } catch (error) {
        console.error("Critical Script Error:", error);
        // Fallback for user visibility if console is closed
        const errDiv = document.createElement('div');
        errDiv.style.position = 'fixed';
        errDiv.style.top = '0';
        errDiv.style.left = '0';
        errDiv.style.background = 'red';
        errDiv.style.color = 'white';
        errDiv.style.zIndex = '9999';
        errDiv.style.padding = '10px';
        errDiv.textContent = 'JS Error: ' + error.message;
        document.body.appendChild(errDiv);
    }
});
