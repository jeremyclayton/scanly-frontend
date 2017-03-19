<template>
  <f7-page>
      <h1>anytthing</h1>
      <!-- Simple Chip -->
<f7-chip text="Example Chip"></f7-chip>
<!-- Colored Chip -->
<f7-chip text="Another Chip" bg="red" color="white"></f7-chip>
<!-- Media Chip -->
<f7-chip text="Jane Doe" media='<img src="http://lorempixel.com/100/100/people/9/">'></f7-chip>
<!-- Deleteable Chip -->
<f7-chip text="Another Chip" deleteable @delete="onChipDelete"></f7-chip>
<!-- Deleteable Media Chip -->
<f7-chip text="Jane Doe" media='<img src="http://lorempixel.com/100/100/people/9/">' media-bg="red" deleteable @delete="onChipDelete"></f7-chip>
  </f7-page>
</template>

<script>
export default {}
</script>
