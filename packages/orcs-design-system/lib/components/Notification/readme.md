Notifications should be used to present important and contextual information to the user when particular events are triggered, e.g. saving, error etc. Make sure to use an appropriate icon and colour for the specific notification situation.

Default notifications are displayed inline, if a floating notification is required (if something happens that applies to the entire page/view/app for example) then you can add the floating prop, which you can see displayed in an example that is floating and stuck to the bottom right of this design system guide.

If you want your notification to be closable, you must use the onDismiss prop to correctly unmount the component. If you do not do this, clicking the close button will hide the notification visually using CSS and this will not be able to be shown again, even if the event that triggers the notification occurs again.

```js
<Layout childVerticalSpacing>
  <Notification icon={["fas", "share-square"]} onDismiss={() => {}}>
    Default notification message for messages that aren't super important, e.g.
    Link shared.
  </Notification>

  <Notification colour="success" icon={["fas", "check-circle"]}>
    Green notification for good/successful notifications, e.g. Details updated
    successfully!
  </Notification>

  <Notification colour="warning" icon={["fas", "exclamation-triangle"]}>
    Warning notification e.g. This may take a few minutes to update.
  </Notification>

  <Notification colour="danger" icon={["fas", "exclamation-circle"]}>
    Error notification e.g. Update failed! Please try again.
  </Notification>

  <Notification
    closable={false}
  >
    <Layout childChildHorizontalSpacingHalf>
      <Flex>
        <Loading inverted/> <span>In progress notification with disabled close. E.g. Importing data...</span>
      </Flex>
    </Layout>
  </Notification>

  <Notification floating bottom="20px" right="20px" icon={["fas", "bell"]}>
    Floating notification.
  </Notification>
</Layout>
```