import Ably from "ably/promises";
import { useEffect } from "react";
import { Post } from "../utils/api";

const ably = new Ably.Realtime.Promise({ authUrl: "/api/ably" });
const date = Date.now();
export function useChannel(channelName, callbackOnMessage) {
  const channel = ably.channels.get(channelName + date);
  Post("/api/chat/join",{
    channelName: channelName + date,
  }).then(res=>{
    console.log(res);
    })

  const onMount = () => {
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
