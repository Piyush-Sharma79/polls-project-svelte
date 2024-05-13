<script>
   
    import PollDetails from './PollDetails.svelte';
    import PollStore from '../stores/PollStore.js';
    import {onMount,onDestroy } from 'svelte';
    import {fade,slide ,scale} from 'svelte/transition';
    import {flip} from 'svelte/animate';
    
    // export let polls=[];

    // const unsub = PollStore.subscribe((data)=>{
    //     polls = data;
    // });


    //onMount(()=>{})

    // onDestroy(()=>{
    //     unsub();
    // })

</script>

<div class="poll-list" in:fade>
    {#each $PollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip = {{duration:500}}>
            <!-- vote event will be forwarded to the parent component -->   
            <!-- <PollDetails {poll} on:vote /> -->
            <PollDetails {poll} />
        </div>
    {/each}
</div>


<style>
    .poll-list{
        display: grid;
        grid-template-columns : 1fr 1fr;
        grid-gap: 20px;
    }
</style>