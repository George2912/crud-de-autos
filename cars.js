const cars = [
    {
        id: 1,
        marca: 'Suzuki',
        model: 'Swift',
        color: 'Plata',
        year: 2017,
        price: "$210,000",
    },
    {
        id: 2,
        marca: 'Vollswagen',
        model: 'Vento',
        color: 'Blanco',
        year: 2015,
        price: "$178,000",
    },
    {
        id: 3,
        marca: 'Toyota',
        model: 'Corolla',
        color: 'Negro',
        year: 2010,
        price: "$280,000",
    },
    {
        id: 4,
        marca: 'Nissan',
        model: 'Sentra',
        color: 'Gris',
        year: 2020,
        price: "$320,000",
    },

]
var editingCar = false;

function printCars() {
    var tableBody = document.getElementById('cars-table-body');
    tableBody.innerHTML = '';
    cars.forEach((car) => {
        var td = `<tr>
                    <td>
                        ${car.marca}
                    </td>
                    <td>
                        ${car.model}
                    </td>
                    <td>
                        ${car.color}
                    </td>
                    <td>
                        ${car.year}
                    </td>
                    <td>
                        ${car.price + ' ' +'MXN'}
                    </td>
                    <td>
                        <button class="btn btn-danger" onclick="removeCar(${car.id})">
                            Eliminar
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-warning" onclick="editCarButton(${car.id})">
                        Editar
                        </button>
                    </td>
                </tr>`
                tableBody.innerHTML += td;
    })
}

function submitCar() {
    if(editingCar) {
        editCar();
    } else {
        addCar();
    }
}

function editCar() {
    var car = document.getElementById('brand').value;
    editingCar.marca = car;
    var model = document.getElementById('model').value;
    editingCar.model = model;
    var color = document.getElementById('color').value;
    editingCar.color = color;
    var year = document.getElementById('year').value;
    editingCar.year = year;
    var price = document.getElementById('price').value;
    editingCar.price = price;
    printCars();
    editingCar = false;
    document.getElementById('brand').value = "";
    document.getElementById('model').value = "";
    document.getElementById('color').value = "";
    document.getElementById('year').value = "";
    document.getElementById('price').value = "";
}

function editCarButton(id) {
    var car = cars.find((car) => car.id === id)
    document.getElementById('brand').value = car.marca;
    document.getElementById('model').value = car.model;
    document.getElementById('color').value = car.color;
    document.getElementById('year').value = car.year;
    document.getElementById('price').value = car.price;
    editingCar = car;
}

function addCar() {
    var car = document.getElementById('brand').value;
    var model = document.getElementById('model').value;
    var color = document.getElementById('color').value;
    var year = document.getElementById('year').value;
    var price = document.getElementById('price').value;
    var newCar = {
        id: cars.length +1,
        marca: car,
        model: model,
        color: color,
        year: year,
        price: "$" + price,
    }
    cars.push(newCar);
    printCars();
    document.getElementById('brand').value = "";
    document.getElementById('model').value = "";
    document.getElementById('color').value = "";
    document.getElementById('year').value = "";
    document.getElementById('price').value = "";
}


function removeCar(id) {
    var position = cars.findIndex((car) => car.id === id)
    cars.splice(position, 1);
    printCars();
}


printCars();