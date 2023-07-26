import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './Star.svg';
import { useEffect, useState, KeyboardEvent } from 'react';

export const Rating = ({ rating, isEditable = false, setRating, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  const changeDisplay = (index: number): void => {
    if (!isEditable) {
      return;
    }
    constructRating(index);
  };

  const onClick = (index: number): void => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(index);
  };

  const handleSpace = (index: number, event: KeyboardEvent<SVGAElement>): void => {
    if (event.code !== 'Space' || !setRating) {
      return;
    }
    setRating(index);
  };

  const constructRating = (currentRating: number): void => {
    const updatedArray = ratingArray.map((rate: JSX.Element, index: number) => {
      return (
        <span
          key={index}
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={(): void => changeDisplay(index + 1)}
          onMouseLeave={(): void => changeDisplay(rating)}
          onClick={(): void => onClick(index + 1)}
        >
          <StarIcon tabIndex={isEditable ? 0 : -1} onKeyDown={(event: KeyboardEvent<SVGAElement>): boolean | void => isEditable && handleSpace(index + 1, event)} />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((rating, index) => (
        <span key={index}>{rating}</span>
      ))}
    </div>
  );
};

