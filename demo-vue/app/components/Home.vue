<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"></Label>
    </ActionBar>

    <StackLayout>
      <Label text="CardView working in NativeScript-Vue" class="h3"/>
      <CardView ripple="true" padding="5" margin="5" height="300">
        <StackLayout>
          <Label class="info" horizontalAlignment="center" verticalAlignment="center">
            <FormattedString>
              <Span class="fa" text.decode="&#xf135; "/>
              <Span :text="message"/>
            </FormattedString>
          </Label>
          <Image src="res://icon" stretch="aspectFit" height="120"/>
          <Button text="Button"/>
        </StackLayout>
      </CardView>
    </StackLayout>
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
