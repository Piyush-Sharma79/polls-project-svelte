<!-- main component for polls project -->

<script>
    import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte';
    import Tabs from './shared/Tabs.svelte';
    import CreatePollForm from './components/CreatePollForm.svelte';
    import PollList from './components/PollList.svelte';

    //tabs
    let items = ['Current Polls','Add New Poll'];
    let activeItem = 'Add New Poll';


    const tabChange = (e) =>{
        activeItem  = e.detail;
    }

    let polls = [
        {
            id:1,
            question:'What is your favorite programming language?',
            answerA:'JavaScript',
            answerB:'Python',
            votesA:10,
            votesB:5
        },
    ]
    const handleAdd = (e)=>{
        const poll = e.detail;
        polls = [poll,...polls];
        activeItem = 'Current Polls';
    }
</script>

<Header />
<main>
    <Tabs {activeItem} {items} on:tabChange = {tabChange}/>
    {#if activeItem == 'Current Polls'}
        <PollList {polls}/>
    {:else if activeItem == 'Add New Poll'}
        <CreatePollForm on:add={handleAdd}/>
    {/if}
</main>
<Footer />


<style>
    main{
        max-width:960px;
        margin: 40px auto;
    }
</style>