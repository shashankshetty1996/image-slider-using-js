# Image Slider Using Javascript

Created a image slider with basic html, css and js.

## index.html

HTML markup contains class slider which will act as container for the image slider.

###item
Acts as the placeholder for image and it's caption
`
<div class="items">
    <img src="/img/image1.jpeg" alt="Image not loaded">
    <div class="caption bottom">
        <h1>Caption here</h1>
    </div>
</div>
`

### caption
Caption class is used to add a caption to the image which is currently been displayed.

`
<div class="caption bottom">
    <!-- caption here -->
</div>
`

### animation class
There are 4 animation class which has to used along caption class
Animation Class  | description
---------------- | ----------------
left             | Caption is moved from right to left
right            | Caption is moved from left to right
top              | Caption is moved from bottom to top
bottom           | Caption is moved from top to bottom

- - - -

Designed by [Shashank S Shetty](http://www.facebook.com/shashankshetty1996)