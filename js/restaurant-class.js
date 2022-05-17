export class Restaurant {
  constructor(
    name,
    menuLink,
    neighborhood,
    mapLink,
    cuisine,
    keywords,
    isVegan
  ) {
    this.name = name;
    this.menuLink = menuLink;
    this.neighborhood = neighborhood;
    this.mapLink = mapLink;
    this.cuisine = cuisine;
    this.keywords = keywords;
    this.isVegan = isVegan;
  }
}
