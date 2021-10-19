<script>
    // import {createEventDispatcher} from "svelte"
    import {FeedbackStore} from "../stores"
    import Card from "../layout/card.svelte"
    export let feedback; 

    // const dispatch = createEventDispatcher()
    
    const deleteHandler = (itemId) => {
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter(item => item.id != itemId)
    })
  }
</script>

<Card>
    <div class="num-display">
        {feedback.rating}
    </div>
    <button class="close" on:click={() => deleteHandler(feedback.id)}>
        ✖
    </button>
    <p class="text-display">
        {feedback.comment}
    </p>

    <!-- <h2><span>Rating:</span>  {feedback.rating}</h2>
    <p><b>Comment: </b> {feedback.comment}</p> -->
</Card>

<style>
    /* p, h2 {
        padding: 0 10px;
        margin: 10px 20px;
        color: Black;
        } */

    /* h2 span {
        color: yellow;
    }

    p b {
        color: red;
    } */
.num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }
.close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>