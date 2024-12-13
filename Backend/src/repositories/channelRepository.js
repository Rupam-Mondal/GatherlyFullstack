import Channel from "../schema/channel.js";

export async function createChannel(ChannelObject){
    try {
        const channel = await Channel.create(ChannelObject);
        return channel
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}