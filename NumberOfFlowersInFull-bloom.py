from typing import List
import heapq

def fullBloomFlowers(self, flowers: List[List[int]], people: List[int]) -> List[int]:
    # Create a list of people with their availability time and index
    people = [(p, i) for i, p in enumerate(people)]
    res = [0] * len(people)
    count = 0

    # Extract start and end times from the flowers list and heapify them
    start = [f[0] for f in flowers]
    end = [f[1] for f in flowers]
    heapq.heapify(start)
    heapq.heapify(end)

    # Iterate through people sorted by availability time
    for p, i in sorted(people):
        while start and start[0] <= p:
            heapq.heappop(start)
            count += 1
        while end and end[0] < p:
            heapq.heappop(end)
            count -= 1
        res[i] = count

    return res