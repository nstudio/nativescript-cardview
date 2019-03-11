<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"></Label>
    </ActionBar>

    <GridLayout>
      <CardView ripple="true" margin="5" loaded="{{ cardLoaded }}" id="batCard" class="whiteCard">
        <grid-layout rows="200, auto, auto" columns="*, *">
          <image src="res://icon" stretch="aspectFill" margin="10" colspan="2" row="0">
          <label
            text="NativeScript wants to be friends?"
            class="info"
            textWrap="true"
            row="1"
            colspan="2"
          />
          <button text="Decline" class="blue" row="2" col="0"/>
          <button text="Accept" class="blue" row="2" col="1"/>
        </grid-layout>
      </CardView>

      <Label class="info" horizontalAlignment="center" verticalAlignment="center">
        <FormattedString>
          <Span class="fa" text.decode="&#xf135; "/>
          <Span :text="message"/>
        </FormattedString>
      </Label>
    </GridLayout>
  </Page>
</template>

<script>
export default {
  computed: {
    message() {
      return 'Blank {N}-Vue app';
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import '../app-variables';
// End custom common variables

// Custom styles
.fa {
  color: $accent-dark;
}

.info {
  font-size: 20;
}
</style>
