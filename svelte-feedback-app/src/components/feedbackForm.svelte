<script>
    import {v4 as uuidv4} from 'uuid'
    import {FeedbackStore} from '../stores'
    import {createEventDispatcher} from 'svelte'
    import Card from "../layout/card.svelte"
    import Button from "../layout/button.svelte"
    import RatingSelect from "../layout/ratingSelect.svelte"

    const dispatch = createEventDispatcher()

    let text = ''
    let btnDisabled = true;
    let rating = 8
    let min = 10
    let message

    const handleSelect = (e) => {
        rating = e.detail
    }

    const handleSubmit = () => {
      if(text.trim().length > min) {
        const newFeedback = {
          id: uuidv4(),
          rating: +rating,
          comment: text,
          
          
        }
        FeedbackStore.update((currentFeedback) => {
          return [newFeedback, ...currentFeedback]
        })

        text = ''
      }
    }

    const handleInput = () => {
      if(text.trim().length <= min){
        message = `Comment should be atleast ${min} characters long.`
      }
      else {
        message = null
        btnDisabled = false
      }
    }

</script>

<Card>
  <header>
    <h2>Tell us how much do you like us and why?</h2>
  </header>
  <form on:submit|preventDefault = {handleSubmit}>
    <RatingSelect on:rating-select = {handleSelect} />
    <div class="input-group">
        <input type="text" on:input = {handleInput} bind:value = {text} placeholder="Give us a comment.">
        <Button type="submit" disabled={btnDisabled}>Save</Button>
    </div>
    {#if message}
      <div class="message">
          {message}
      </div>
    {/if}
  </form>  
</Card>

<style>
    header {
      max-width: 400px;
      margin: auto;
    }
    header h2 {
      font-size: 22px;
      font-weight: 600;
      text-align: center;
    }
    .input-group {
      display: flex;
      flex-direction: row;
      border: 1px solid #ccc;
      padding: 8px 10px;
      border-radius: 8px;
      margin-top: 15px;
    }
    input {
      flex-grow: 2;
      border: none;
      font-size: 16px;
    }
    input:focus {
      outline: none;
    }
    .message{
      padding-top: 10px;
      text-align: center;
      color: rebeccapurple;
    }
  </style>