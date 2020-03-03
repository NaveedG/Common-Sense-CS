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

  def search(value)
    @array.find { |x| return true if x == value }
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