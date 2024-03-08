document.addEventListener('DOMContentLoaded', function () {
    const carData = {
        BMW: {
      i8: {
        "price": "$147,500",
        "model": "i8",
        "color": "Silver",
        "year": 2022,
        "engine": "1.5L 3-cylinder hybrid",
      },
      i7: {
        "price": "$96,550",
        "model": "i7",
        "color": "Black",
        "year": 2023,
        "engine": "3.0L 6-cylinder hybrid",
      },
      X5: {
        "price": "$59,400",
        "model": "X5",
        "color": "Blue",
        "year": 2022,
        "engine": "3.0L 6-cylinder",
      },
      M5: {
        "price": "$104,000",
        "model": "M5",
        "color": "Red",
        "year": 2023,
        "engine": "4.4L V8",
      }
    },
    Mercedes: {
      cClass: {
        "price": "$41,600",
        "model": "C-Class",
        "color": "White",
        "year": 2022,
        "engine": "2.0L 4-cylinder",
      },
      eClass: {
        "price": "$54,200",
        "model": "E-Class",
        "color": "Silver",
        "year": 2023,
        "engine": "3.0L 6-cylinder",
      }
    },
    Audi: {
      a4: {
        "price": "$39,100",
        "model": "A4",
        "color": "Blue",
        "year": 2022,
        "engine": "2.0L 4-cylinder",
      },
      q5: {
        "price": "$43,300",
        "model": "Q5",
        "color": "Black",
        "year": 2023,
        "engine": "2.0L 4-cylinder",
      }
    },
    Nissan: {
      altima: {
        "price": "$24,300",
        "model": "Altima",
        "color": "Red",
        "year": 2022,
        "engine": "2.5L 4-cylinder",
      },
      rogue: {
        "price": "$26,800",
        "model": "Rogue",
        "color": "Silver",
        "year": 2023,
        "engine": "2.5L 4-cylinder",
      }
    },
    Sonata: {
      hybrid: {
        "price": "$27,750",
        "model": "Sonata Hybrid",
        "color": "White",
        "year": 2022,
        "engine": "2.0L 4-cylinder hybrid",
      },
      sport: {
        "price": "$23,950",
        "model": "Sonata Sport",
        "color": "Gray",
        "year": 2023,
        "engine": "2.5L 4-cylinder",
      }
    },
    Ford: {
      mustang: {
        "price": "$27,205",
        "model": "Mustang",
        "color": "Yellow",
        "year": 2022,
        "engine": "2.3L 4-cylinder",
      },
      explorer: {
        "price": "$32,675",
        "model": "Explorer",
        "color": "Green",
        "year": 2023,
        "engine": "3.0L 6-cylinder",
      }
    },
    Toyota: {
      camry: {
        "price": "$25,045",
        "model": "Camry",
        "color": "Black",
        "year": 2022,
        "engine": "2.5L 4-cylinder",
      },
      rav4: {
        "price": "$26,250",
        "model": "RAV4",
        "color": "Blue",
        "year": 2023,
        "engine": "2.5L 4-cylinder",
      }
    }
    };

    // Function to create a Bootstrap card for a car
    function createCarCard(car) {
      return `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="car-image-placeholder.jpg" class="card-img-top" alt="Car Image">
            <div class="card-body">
              <h5 class="card-title">${car.model}</h5>
              <p class="card-text">
                <strong>Price:</strong> ${car.price}<br>
                <strong>Color:</strong> ${car.color}<br>
                <strong>Year:</strong> ${car.year}<br>
                <strong>Engine:</strong> ${car.engine}
              </p>
            </div>
          </div>
        </div>
      `;
    }

    // Get the container where car cards will be appended
    const carCardsContainer = document.getElementById('carCardsContainer');

    // Iterate over car data and create cards
    for (const brand in carData) {
      for (const model in carData[brand]) {
        const car = carData[brand][model];
        const carCardHTML = createCarCard(car);
        carCardsContainer.innerHTML += carCardHTML;
      }
    }
  });
