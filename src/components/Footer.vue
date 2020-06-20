<template>
  <div class="footer">
    <h4>© Showreel made by Nicolas Vondru</h4>
    <h4>niki.vondru@hotmail.ch</h4>
    <h4>Kolumbanstrasse 29, 9008, St. Gallen</h4>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  width: 100%;
  background-color: #997c67;
  padding: 1rem 0rem;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
}

/* @media only screen and (max-width: 1200px) {
  .footer {
    grid-template-columns: 1fr;
  }
} */

@media only screen and (max-width: 900px) {
  .footer {
    grid-template-columns: 1fr;
  }
}
</style>
