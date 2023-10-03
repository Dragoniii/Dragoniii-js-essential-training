function Camera(brand, model, year, format, lens, filmType) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.format = format;
    this.lens = lens;
    this.filmType = filmType;
}

const myCamera = new Camera("Hasselblad", "500C/M", 1963, "medium format", "Carl Zeiss 80mm f/2.8 Planar T", "120");

const getCurrentYear = () => new Date().getFullYear();

const cameraAge = (year) => getCurrentYear() - year;

document.body.innerHTML = `My camera is a ${myCamera.brand} ${myCamera.model} made in ${myCamera.year} making it ${cameraAge(myCamera.year)} years old. It's a ${myCamera.format} camera with a ${myCamera.lens} lens using ${myCamera.filmType} film.`;
