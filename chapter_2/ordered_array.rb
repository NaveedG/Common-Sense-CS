# Use your favorite object-oriented programming language to create a class that represents an ordered array. 
# It should include functions/methods that serve as the key operations: Read, search, insert, and delete. 
# Ensure that the insert operation inserts the value in the correct place within the ordered array.

class OrderedArray
  def initialize(array)
    @array = array.sort
  end

  def read(index)
    @array[index]
  end

  def linear_search(value)
    @array.find { |x| return true if x == value }
  end

  def binary_search(value)
    first_element = 0
    last_element = @array.length - 1

    while first_element <= last_element do
      midpoint = (first_element + last_element) / 2
      mid_value = @array[midpoint]

      if mid_value == value
        return true
      elsif mid_value > value
        last_element = midpoint - 1
      elsif mid_value < value
        first_element = midpoint + 1
      end
    end
    return nil
  end

  def insert(value)
    insert_at = @array.bsearch_index { |x| x >= value }
    if insert_at
      @array.insert(insert_at, value)
    else
      @array << value
    end
  end

  def delete(value)
    @array.delete(value)
  end
end