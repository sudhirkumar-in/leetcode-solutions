/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    // Helper function to calculate squared distance from origin
    const squaredDistance = ([x, y]) => x * x + y * y;
    
    // Sort points based on their distance from the origin
    points.sort((a, b) => squaredDistance(a) - squaredDistance(b));
    
    // Return the first k points
    return points.slice(0, k);
};
