let testimonialIndex = 1;
showTestimonial(testimonialIndex);

function plusTestimonial(n) {
  showTestimonial(testimonialIndex += n);
}

function showTestimonial(n) {
  let testimonials = document.getElementsByClassName("testimonial");
  
  if (n > testimonials.length) {
    testimonialIndex = 1;
  }
  if (n < 1) {
    testimonialIndex = testimonials.length;
  }
  
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }
  
  testimonials[testimonialIndex - 1].style.display = "block";
}