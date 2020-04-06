# Use your favorite object-oriented programming language to create a class that represents an array-based set. 
# It should include functions/methods that serve as the key operations: Read, search, insert, and delete. 
# Ensure that the insert operation will not insert duplicate values.

class ArrayBasedSet
  def initialize(array)
    @array = array.uniq
  end

  def read(index)
    @array[index]
  end

  def search(value)
    @array.find { |x| return true if x == value }
  end

  def insert(value)
    if @array.include?(value)
      return nil
    else
      @array << value
    end
  end

  def delete(value)
    @array.delete(value)
  end
end