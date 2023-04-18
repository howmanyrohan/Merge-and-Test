// File: merge.ts

export function merge(collection_1: number[], collection_2: number[]): number[] 
{
    const merged: number[] = [];
    let i = 0;
    let j = 0;
  
    // Merge the arrays
    while (i < collection_1.length && j < collection_2.length) 
    {
        if (collection_1[i] < collection_2[j]) 
        {
            merged.push(collection_1[i]);
            i++;
        } else 
        {
            merged.push(collection_2[j]);
            j++;
        }
    }
  
    // Add any remaining elements from collection_1
    while (i < collection_1.length) 
    {
        merged.push(collection_1[i]);
        i++;
    }
  
    // Add any remaining elements from collection_2
    while (j < collection_2.length) 
    {
        merged.push(collection_2[j]);
        j++;
    }
  
    return merged;
  }
  