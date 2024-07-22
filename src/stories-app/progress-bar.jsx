import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'carbon-components-react';

export const MyProgressBar = () => {
  const size = 728;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(currentProgress => {
          const advancement = Math.random() * 8;
          if (currentProgress + advancement < size) {
            return currentProgress + advancement;
          } else {
            clearInterval(interval);
            return size;
          }
        });
      }, 50);
    }, 3000);
  }, []);

  const running = progress > 0;
  let helperText = running ? `${progress.toFixed(1)}MB of ${size}MB` : 'Fetching assets...';
  if (progress >= size) {
    helperText = 'Done';
  }

  return (
    <ProgressBar
      value={running ? progress : null}
      max={size}
      status={progress === size ? 'finished' : 'active'}
      label="Export data"
      helperText={helperText}
    />
  );
};