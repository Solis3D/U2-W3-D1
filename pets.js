const savedPets = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  compareOwners = function (savedPets) {
    return savedPets[savedPets.length - 1].ownerName === savedPets[savedPets.length - 2].ownerName;
  };
}

const form = document.getElementById("pet-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const animal = new Pet(petName, ownerName, species, breed);
  savedPets.push(animal);

  console.log(savedPets);

  const petContainer = document.getElementById("pet-container");

  const getH5 = document.querySelectorAll("#pet-container h5");

  getH5[0].innerHTML = animal.petName;
  getH5[1].innerHTML = animal.ownerName;
  getH5[2].innerHTML = animal.species;
  getH5[3].innerHTML = animal.breed;

  const printSection = document.getElementById("print-section");

  printSection.classList.remove("d-none");

  if (savedPets.length > 1 && animal.compareOwners(savedPets) === true) {
    const h4 = document.querySelector("#print-section > div > h4");

    h4.classList.remove("d-none");
  }

  form.reset();
});
