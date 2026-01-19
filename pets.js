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

  if (savedPets.length > 1) {
    alert(animal.compareOwners(savedPets));
  }

  form.reset();
});
