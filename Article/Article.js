// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    this.exHiButtons = domElement.querySelector('.exHiButtons');
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.getElementsByClassName('expandButton')[0];
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    // No
    this.hideButton = domElement.getElementsByClassName('hideButton')[0];
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.exHiButtons.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article');
    this.expandButton.classList.toggle('close');
    this.hideButton.classList.toggle('close');
  }
}

/* START HERE:

- Select all classes named ".article" and assign that value to the articles variable.

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article');

articles.forEach(element => new Article(element));
