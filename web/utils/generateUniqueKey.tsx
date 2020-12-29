// Begin Component
// __________________________________________________________________________________________
/**
 *
 * generateUniqueKey.tsx
 * @author Peter Laxalt
 * @description Generates a unique key.
 *
 */
export const generateUniqueKey = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};


