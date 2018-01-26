# Image Slider Using Javascript

Created a image slider with basic html, css and js.

## index.html

HTML markup contains class **slider** which will act as container for the _Image Slider_.

### .item class

Acts as the placeholder for image and it's caption

```html
<div class="items">
    <img src="image source" alt="Image not loaded">
    <div class="caption bottom">
        <!-- caption here -->
    </div>
</div>
```

### .caption class

Caption class is used to add a caption to the image which is currently been displayed.

```html
<div class="caption bottom">
    <!-- caption here -->
</div>
```

### animation class

There are 4 animation class which has to used along caption class

```
Animation Class  | description                           |
---------------- | ------------------------------------- |
`left`           | `Caption is moved from right to left` |
`right`          | `Caption is moved from left to right` |
`top`            | `Caption is moved from bottom to top` |
`bottom`         | `Caption is moved from top to bottom` |
```

---

Designed by [Shashank S Shetty](http://www.facebook.com/shashankshetty1996)
