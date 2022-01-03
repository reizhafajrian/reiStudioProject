import Ably from "ably/promises";
import { useEffect } from "react";

const ably = new Ably.Realtime.Promise({ authUrl: "/api/ably" });

export function useChannel(channelName, callbackOnMessage) {
  const channel = ably.channels.get(channelName);

  const onMount = () => {
    // channel.history(function (err, messagesPage) {
    //   // array of Message
    // //   messagesPage.items[0].data; // payload for first message
    //   callbackOnMessage(messagesPage.items[0].data);
    //   console.log(messagesPage.items[0].data, "ini message");
    //   // retrieves the next page as PaginatedResult
    // });

    channel.subscribe((msg) => {
      callbackOnMessage(msg);
    });
  };

  const onUnmount = () => {
    channel.unsubscribe();
  };

  const useEffectHook = () => {
    onMount();
    return () => {
      onUnmount();
    };
  };

  useEffect(useEffectHook);

  return [channel, ably];
}
