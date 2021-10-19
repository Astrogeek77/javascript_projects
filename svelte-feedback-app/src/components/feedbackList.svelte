<script>
    // import {onMount, onDestroy} from 'svelte'
  import {FeedbackStore} from '../stores'
  import { fade, scale } from 'svelte/transition'
  import FeedbackItem from './FeedbackItem.svelte'
  // let feedback = []
  // const unsubscribe = FeedbackStore.subscribe((data) => feedback = data)
  // onMount(() => {
  //   console.log('mounted')
  // })
  // onDestroy(() => {
  //  unsubscribe()
  // })
</script>

{#each $FeedbackStore as feedback (feedback.id) }
    <div in:scale out:fade={{ duration: 500 }}>
        <FeedbackItem feedback={feedback} on:delete-fb />
    </div>
{/each}

<style>
  
</style>
