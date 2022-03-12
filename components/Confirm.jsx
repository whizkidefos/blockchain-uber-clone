import React from 'react';

const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  rideSelectorContainer: `h-full flex flex-col overflow-scroll`,
  confirmButtonContainer: ` border-t-2 cursor-pointer z-10`,
  confirmButton: `bg-black text-white m-4 py-4 text-center text-xl`,
}

const Confirm = () => {
  const storeTripDetails = async () => {}

  return (
    <section class={style.wrapper}>
        <div class={style.rideSelectorContainer}>
        {/* ride selector */}
        </div>

        <div class={style.confirmButtonContainer}>
          <div
            class={style.confirmButton}
            onClick={() => storeTripDetails()}
          >
            Confirm UberX
          </div>
        </div>
    </section>
  )
}

export default Confirm;