type Props = {
  current_amount: number;
  target_amount: number;
};

// Calculate the progress of the goal
export const calculateProgress = ({ current_amount, target_amount }: Props) => {
  const progress = current_amount / target_amount;

  const amountLeft = target_amount - current_amount;

  const percentageLeft = Math.round((1 - progress) * 100);

  const percentageSaved = Math.round(progress * 100);

  return {
    progress: progress > 1 ? 1 : progress,
    percentageLeft: percentageLeft > 100 ? 100 : percentageLeft,
    amountLeft: amountLeft < 0 ? 0 : amountLeft,
    percentageSaved: percentageSaved > 100 ? 100 : percentageSaved,
  };
};
