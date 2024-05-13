<script>
    import {onMount,onDestroy } from 'svelte';
    import PollDetails from './PollDetails.svelte';
    import PollStore from '../stores/PollStore.js';
    // export let polls=[];

    // const unsub = PollStore.subscribe((data)=>{
    //     polls = data;
    // });


    //onMount(()=>{})

    // onDestroy(()=>{
    //     unsub();
    // })
</script>

<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
        <div>
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