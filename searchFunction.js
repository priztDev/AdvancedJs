// export default function getMatchingTripsArr
function getMatchingTripsArr(arr, keyword){
    return arr.filter(function(trip){
        return trip.description.toLowerCase().includes(keyword)
    })
}

export default getMatchingTripsArr