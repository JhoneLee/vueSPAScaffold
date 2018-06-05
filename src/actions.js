/*
* @Author: liyunjiao
* @Date:   2018-06-05 16:26:18
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-06-05 16:26:39
*/

export const increment = ({ dispatch }) => dispatch('INCREMENT')
export const decrement = ({ dispatch }) => dispatch('DECREMENT')

export const incrementIfOdd = ({ dispatch, state }) => {
  if ((state.count + 1) % 2 === 0) {
    dispatch('INCREMENT')
  }
}

export const incrementAsync = ({ dispatch }) => {
  setTimeout(() => {
    dispatch('INCREMENT')
  }, 1000)
}